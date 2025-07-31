import matplotlib.pyplot as plt

labels = ['Python', 'Java', 'C++', 'Ruby']
sizes = [215, 130, 245, 210]

plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
plt.axis('equal')  # Equal aspect ratio makes it a circle
plt.title("Pie Chart")
plt.show()