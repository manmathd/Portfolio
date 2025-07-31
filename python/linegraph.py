import matplotlib.pyplot as plt

# Sample data
x = [1, 2, 3, 4, 5]
y = [10, 12, 8, 14, 11]

# Create a line graph
plt.plot(x, y, marker='o', linestyle='-', color='blue')
plt.title("Sample Line Graph")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.grid(True)
plt.show()