import matplotlib.pyplot as plt

# Sample data (you can modify this)
subjects = ['Math', 'Physics', 'Chemistry', 'English', 'Biology']
student1_marks = [88, 92, 80, 76, 85]
student2_marks = [78, 85, 89, 90, 82]

# Set dark background style
plt.style.use('dark_background')

# Plotting lines
plt.plot(subjects, student1_marks, color='red', marker='o', linestyle='-', linewidth=2, label='Student 1')
plt.plot(subjects, student2_marks, color='black', marker='s', linestyle='--', linewidth=2, label='Student 2')

# Annotate each point with the mark value
for i, mark in enumerate(student1_marks):
    plt.text(subjects[i], mark+1, str(mark), color='white', ha='center')
for i, mark in enumerate(student2_marks):
    plt.text(subjects[i], mark-4, str(mark), color='white', ha='center')

# Labels and title
plt.title("Comparison of Marks in Subjects", fontsize=14, color='white')
plt.xlabel("Subjects", fontsize=12, color='white')
plt.ylabel("Marks", fontsize=12, color='white')
plt.legend()

# Grid
plt.grid(True, linestyle=':', linewidth=0.5)

# Show the plot
plt.tight_layout()
plt.show()