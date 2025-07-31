import matplotlib.pyplot as plt

# Data for the bar graph
categories = ['python', 'uibd', 'Cherries', 'Dates']
values = [400, 350, 300, 450]

# Create the bar graph
plt.bar(categories, values, color='blue')

# Add labels and title
plt.xlabel("Fruits")
plt.ylabel("Sales")
plt.title("Fruit Sales Bar Graph")

# Show the graph
plt.show()