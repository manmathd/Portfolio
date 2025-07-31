import numpy as np
import matplotlib.pyplot as plt

# Generate x values from 0 to 2π
x = np.linspace(0, 2 * np.pi, 1000)
# Calculate the sine of each x value
y = np.sin(x)

# Plot the sine wave
plt.plot(x, y)
plt.title("Sine Wave")
plt.xlabel("x (radians)")
plt.ylabel("sin(x)")
plt.grid(True)
plt.show()