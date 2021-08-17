## Income Expense Tracker

**This is an application for tracking your Expenses and Incomes.**
**You can also create your to-buy list and manage expenses effectively.**

[Visit app here](https://trackmoneyflow.herokuapp.com)

## Features

    -One can keep records of his/her expenses and incomes.

    -See all the data in bar chart and pie chart as well as in Tabular form.

    -Update/Edit/Delete the data if necessary.

    -Search for the expenses/income between specific time frame.

    -Make a to-buy wish list and prioritise his/her expenses.


## Set Up Instructions
1. Clone the repo.
```sh
$ git clone https://github.com/Kaushal-Dhungel/money_tracker.git
```

2. Install the dependencies
```sh
$ pip install -r requirements.txt
```

3. Create .env file and copy details from env.txt files
```sh
$ cp env.txt .env
```

4. Start the backend server(if you wish to run frontend and backend separately) else SKIP this.
```sh
$ python3 manage.py runserver
```

5. Open new terminal. If vscode press:-
```sh
$ ctrl+ shift+ `
```

6. Go to react-frontend directory.
```sh
$ cd react-frontend
```

7. Install npm dependencies
```sh
$ npm i
```

8. Run step 3 again

9. Start the frontend server(if you wish to run frontend and backend separately).
```sh
$ npm start
```

10. Else run, this will automatically create the build folder in the django's directory (no need to move manually) and execute step 4.
```sh
$ npm run build
```