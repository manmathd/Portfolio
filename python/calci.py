import tkinter as tk
import math

def on_click(event):
    text = event.widget.cget("text")
    expression = entry_var.get()

    try:
        if text == "=":
            result = eval(expression)
            entry_var.set(str(result))
        elif text == "C":
            entry_var.set("")
        elif text == "π":
            entry_var.set(expression + str(math.pi))
        elif text == "e":
            entry_var.set(expression + str(math.e))
        elif text == "sin":
            entry_var.set(str(math.sin(math.radians(float(expression)))))
        elif text == "cos":
            entry_var.set(str(math.cos(math.radians(float(expression)))))
        elif text == "tan":
            entry_var.set(str(math.tan(math.radians(float(expression)))))
        elif text == "log":
            entry_var.set(str(math.log10(float(expression))))
        elif text == "ln":
            entry_var.set(str(math.log(float(expression))))
        elif text == "√":
            entry_var.set(str(math.sqrt(float(expression))))
        elif text == "^":
            entry_var.set(expression + "**")
        else:
            entry_var.set(expression + text)
    except:
        entry_var.set("Error")

root = tk.Tk()
root.title("Scientific Calculator")

entry_var = tk.StringVar()
entry = tk.Entry(root, textvariable=entry_var, font=("Arial", 20), justify="right")
entry.pack(fill="both", ipadx=8, ipady=10)

buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["sin", "cos", "tan", "^"],
    ["log", "ln", "√", "π"],
    ["(", ")", "C", "e"]
]

for row in buttons:
    frame = tk.Frame(root)
    frame.pack(expand=True, fill="both")
    for button in row:
        btn = tk.Button(frame, text=button, font=("Arial", 18), height=2, width=5)
        btn.pack(side="left", expand=True, fill="both")
        btn.bind("<Button-1>", on_click)

root.mainloop()