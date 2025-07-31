import matplotlib.pyplot as plt
import numpy as np

# Subjects and corresponding scores
subjects = ['UI', 'Maths']
sem1_scores = [79, 88]
sem2_scores = [89, 91]

x = np.arange(len(subjects))
width = 0.35

fig, ax = plt.subplots()
ax.bar(x - width/2, sem1_scores, width, label='Semester 1', color='blue')
ax.bar(x + width/2, sem2_scores, width, label='Semester 2', color='green')

ax.set_xlabel('Subjects')
ax.set_ylabel('Scores')
ax.set_title('UI and Maths Score Comparison')
ax.set_xticks(x)
ax.set_xticklabels(subjects)
ax.legend()
ax.grid(True, axis='y')

plt.tight_layout()
plt.show()