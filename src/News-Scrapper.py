import os
import glob
import requests
from bs4 import BeautifulSoup
import json
import time

def get_html_content(url):
    """Fetches HTML content from the specified URL."""
    response = requests.get(url)
    response.raise_for_status()  # Raise an exception for error codes
    return response.content

def extract_news_articles(html_content):
    """Extracts news articles from the provided HTML content."""
    soup = BeautifulSoup(html_content, "html.parser")

    # Find the unordered list with ID "category"
    category_list = soup.find("ul", id="cagetory")  # Note: "cagetory" may be a typo for "category"

    # Extract headlines, URLs, image URLs, content, and date of news articles
    news_articles = []
    for item in category_list.find_all("li", class_="clearfix"):
        headline = item.find("h2").text.strip()
        article_url = item.find("a")["href"]
        image_url = item.find("img")["data-src"]
        content = item.find("p").text.strip()  # Assuming the content is in the first <p> tag
        date = item.find("span").text.strip()  # Extracting the date from a <span> tag
        news_articles.append({"headline": headline, "link": article_url, "image": image_url, "content": content, "date": date})

    return news_articles

def save_news_articles_to_json(news_articles, file_path):
    """Updates an existing JSON file with news articles."""
    if os.path.exists(file_path):
        # If the file exists, load its contents
        with open(file_path, "r") as json_file:
            existing_data = json.load(json_file)
        
        # Append the new news articles to the existing data
        existing_data.extend(news_articles)
        news_articles = existing_data
    
    # Save the combined data to the file
    with open(file_path, "w") as json_file:
        json.dump(news_articles, json_file, indent=4)


def main():
    url = "https://www.moneycontrol.com/news/business/markets/"  # Replace with your preferred source
    max_files = 100  # Maximum number of JSON files to keep
    file_path = "C:/Users/REVANT SHINDE/OneDrive/Desktop/Development -Learning/SE-mini-Project/stock-x-frontend/src/news_articles.json"
    


    while True:
        # Fetch HTML content and extract news articles
        html_content = get_html_content(url)
        news_articles = extract_news_articles(html_content)

        # Store the data in a JSON file
        save_news_articles_to_json(news_articles, file_path)

        # Limit the number of JSON files
        existing_files = glob.glob("*.json")
        if len(existing_files) > max_files:
            existing_files.sort(key=os.path.getctime)
            for file_to_delete in existing_files[:len(existing_files) - max_files]:
                os.remove(file_to_delete)

        # Refresh the data every 5 minutes
        time.sleep(300)  # 300 seconds = 5 minutes

if __name__ == "__main__":
    main()
