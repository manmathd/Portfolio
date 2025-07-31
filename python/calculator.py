import tkinter as tk

def on_click(event):
    text = event.widget.cget("text")
    if text == "=":
        try:
            result = eval(str(entry.get()))
            entry_var.set(result)
        except Exception as e:
            entry_var.set("Error")
    elif text == "C":
        entry_var.set("")
    else:
        entry_var.set(entry_var.get() + text)

root = tk.Tk()
root.title("Simple Calculator")

entry_var = tk.StringVar()
entry = tk.Entry(root, textvariable=entry_var, font=("Arial", 20), justify="right")
entry.pack(fill="both", ipadx=8)

buttons_frame = tk.Frame(root)
buttons_frame.pack()

buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"]
]

for row in buttons:
    frame = tk.Frame(buttons_frame)
    frame.pack(fill="both", expand=True)
    for button in row:
        btn = tk.Button(frame, text=button, font=("Arial", 20), width=4, height=2)
        btn.pack(side="left", fill="both", expand=True)
        btn.bind("<Button-1>", on_click)

root.mainloop()