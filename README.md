# Kryptos
# Overview
This Chrome Extension detects user-inputted passwords by dynamically checking password-type inputs on HTML DOMS. 
The backend will process it and determine the strength. This extensions runs on the background so there is no need for manual activation.

# How it Works?
Password strength is determined by 4 factors:
- Use of Uppercase and Lowercase alphabets
- Use of numbers/digits
- User of special symbols
- Length of password >= 12

# Installation
1. Clone or download the repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Enable Developer Mode (toggle in the top right corner).
4. Click Load Unpacked, then select the project folder.
5. The extension is now installed and running!

# Future Plans
1. Add a feature that will initiate a pop up once detecting new password input on HTML.

# Results Example:
<div style="display: flex; flex-direction: row;">
  <img src="https://media-hosting.imagekit.io//6e32da71751e47ca/Screenshot%202025-03-12%20130050.png?Expires=1836364249&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iDQLaZLZmpEE3OR~MFulbEmMCkJHFHW0U~w4M-M8ZnhlH8zj1EI1OlQcHv5gTIEFxHCKTNeKFToC1CxBznCkGDq~wORiW7w9tz0-lMJh0Pvvq3c8WjdZ23nfcGGTqKgXi9g~KoxZKw7wRA1xArQbv0T30HKuX2oRMLgn6sUaFPMQn8z0rVWLxCLE9tk7bILxwt1x0VXCIhpRzIXHSGbd35SOB3QaXwvOU1LG2OPPFGEN6og0~EyyqhGT91m72imlVZhLy0AvlJI5Cxs6MvehfAT0CHpi0RJE6GTRuNamSXolkRN37vZ4zXioWlwovUodm3cxHkO0n5lB~GnQL2wOTg__" width="250px" height="250px">
  <img src="https://media-hosting.imagekit.io//450c7466ee5244ce/Screenshot%202025-03-12%20130101.png?Expires=1836364418&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=K5w4yrMQQDh2P-cG6fkM6fpYkEkNq8TprlLQKel9ovSaQhPKWaCZjTGh86-H68mBv7ykTqv1tBdlWELC3AMYANUU5TaLdiuG5Chhthacd2SPe662hoOdoja8lIy9QsrKqPkjNDANEIV9iRdrw5twpE67BjqnMZpUIRFnko0n7Ldedhpgc93~uWewCbrKMe6fZqbfjJJ0TtZV8OqEp-ORMR0-J28cTjhv4KxdFMBCZ5BnHqcpOsGjWKBqGb8C0BqeRcLle6ZJpu7Q1OBtwpzgDiGgcKqUXEcSBWmt8cf37C6ZJv60-Qrq9kKE0J8-jzSNPleQGytMsTHhPu7Sxh3pYA__" width="250px" height="250px">
  <img src="https://media-hosting.imagekit.io//7dec6b7f1dc84f89/Screenshot%202025-03-12%20130110.png?Expires=1836364450&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jl5jSMpj1Gl17G91HOmmUir8o2rxc5tWD6xvUIiGw-HypMYAnPOInP3KxCMmx7NC4ehPRx2NnOZz1gtpYEvEoG0teY52AIsf4vDb2aBqM~ALPiwRf8bZE7hJsuQi0xUq5Bwpd6lEpe8NtCkOCrIRJZOetW2kcJ4zrMmVzgRP62AQfFyZIiWAFSbIhw00ydAyVLEKvIsLHdbIdOCEDIKrRa0j6m4eyJHWzy2Qlup4vZpgcOAo4w9jT92FB~swXMQRZwW3Y2mKiOsdtBthkQAGu7T0mMX676g0N0-A4GUEdr0rOORgjHzbrIb7KIUCssCu9wgif1A26KTGW3hA5gycaQ__" width="250px" height="250px">
  <img src="https://media-hosting.imagekit.io//e8f16edb21a44de7/Screenshot%202025-03-12%20130122.png?Expires=1836364496&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YMAnCx5-O74VND2E9vOAA9qDPWXdvEvVBSwZV7XU-umowwocLopli3BZGB6iYKGNUdnoEp7c9z12VwVsk4bHTSgsN11dstmy2-rJmUYEJwoL0fcnFeoA9zI~auI6JLbZYholsjfQ0m2ctLNLdC--GveXVfAr3etV-PsFqUITN7f-E1x8tqMNNfi1pJ6SEXXoZcQt2qx8tWbasL7dUStm1W1CJU0ioW9xbhKdIDcwl8NrDYCY86sX1GLevr6t1vAjmm362YfU8QVfsrAfej-HaEHK-7OTsJ-DOaLliOCoDP9FNZDmOt1C4QisirxmKMQqa9HrKoxffl-VgjedG-HMKQ__" width="250px" height="250px">
  <img src="https://media-hosting.imagekit.io//491b0f432b214a72/Screenshot%202025-03-12%20130133.png?Expires=1836364514&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qWL1lfuyTwmkYL0ua0HTZ0wKPWVK9b4LxfB0DVq34uWzi3gvqWvcNPVyMQ3j53khprS2R2HKAA2IqD2fUqwZNWHbzjNhElZ3jHXZ8MT~~3Skw9MRd3EC89V43ERzi6xQaKZN5oBvt2nNxNxDMCN3MmwDNjds8cFcviruNl9kffyKZ5yIrkNha~lCDEgtNIpbYSptPHtilqcY4NZscolRki-HXvvuf~G3VrmGpE999RC2LqsxM3f7IdKQeWtXfJDY4vFnJCGwfciZBXkSwbtrQyPhr970YcnnMl0PaqxuYR9oHcrj1431vHK62V4VlagW2Nnp9A~ok0FsKSReKTFtmQ__" width="250px" height="250px">
</div>

# Enjoy using it!
<img src="https://media-hosting.imagekit.io//8e38325085aa43e0/YOUR%20PASSWORD%20IS%20TRASH.png?Expires=1836364603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GBEg2MvqW7XfIZwFWLXtvGFI6szu7dWb9820vPgvF3AhuVCAtwy27Qtx1yix~WVPZGUFeeaE8SSBuMrieIxARG3rvcuNtp8Z1REV931roZ-fGLzA19fk4xKJByVg3gt9H7r36jifksn1ZwS~iRS89vYgHYdyTzSqO1q1rAYFESlAt5-UCdQIVrH-XzZ0ZX03XerWM4GtLIvN8yGSEOi3TAR2LMXuDqu4Iu7ecsJnRsbdU9M9QC3azBlXoX3N1Wf9H-oaYXI2zBIOATAOzckioSokoQ12LB3117vS6etU67TX0b4P33qLQ6UaxhRqjD7sE17ViwQB4jO-3GB6MAIw8w__">
