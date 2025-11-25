from datetime import datetime,time

now1 = datetime.now()
midnight = datetime.combine(now1.date(),time(0,0))
minute_pased = (now1 -midnight ).total_seconds() // 60

print(minute_pased)