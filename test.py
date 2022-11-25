from datetime import datetime, timezone

since = datetime(2019, 6, 1, 0, 0, 0)
until = datetime(2022, 6, 1, 0, 0, 0)
years = list(range(since.year, until.year+1))

x = [
    (since, datetime(years[0], 12, 31)),
    *[(datetime(year, 1, 1), datetime(year, 12, 31)) for year in years[1:-1]],
    (datetime(years[-1], 1, 1), until),
]

print(int(since.replace(tzinfo=timezone.utc).timestamp()))
