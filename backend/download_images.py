import urllib.request
import os

print("Downloading 20 unique property images...")

public_dir = r"e:\project\antigravity\frontend\public\properties"
os.makedirs(public_dir, exist_ok=True)

# LoremFlickr keywords focused on exteriors
keywords = ["building", "apartment,exterior", "condo,exterior", "house,exterior", "skyscraper", "mansion,exterior", "facade", "modern,apartment"]

for i in range(1, 21):
    keyword = keywords[i % len(keywords)]
    # Use different seeds to ensure variety
    url = f"https://loremflickr.com/800/600/{keyword}?lock={i + 100}"
    filename = os.path.join(public_dir, f"prop_{i}.jpg")
    try:
        urllib.request.urlretrieve(url, filename)
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

print("Done downloading images.")
