import datetime as dt
import numpy as np
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy

# Flask Setup
app = Flask(__name__)

# Database Setup
# Import SQL Alchemy
from sqlalchemy import create_engine

# Import and establish Base for which classes will be constructed 
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

# Import modules to declare columns and column data types
from sqlalchemy import Column, Integer, String, Float

# Dependencies
import json
import pandas as pd

test_data = pd.read_json("Tweet.json")
test_data2 = pd.read_json("tweets.JSON")
test_data3 = pd.read_json("Resturants.json")

test_data4 = test_data.groupby(["Restaurants"]).mean().reset_index(inplace=False)
test_data4["Restaurant_Name"] = test_data4["Restaurants"]

the_final_df = pd.merge(test_data4, test_data3, left_on='Restaurant_Name', right_on='Restaurant_Name')

# Create the Garbage class
### BEGIN SOLUTION
class Garbage(Base):
    __tablename__ = 'tweets2'
    id = Column(Integer, primary_key=True)
    Restaurants = Column(String(255))
    compound = Column(Float())
    negative = Column(Float())
    positive = Column(Float())
    Restaurant_Name = Column(String(255))
    Coordinates = Column(String(255))
    Cuisine = Column(String(255))
    Latitude = Column(Float())
    Longitude = Column(Float())
    Zomato_Avg_Rating = Column(Float())
### END SOLUTION

 # Create a connection to a SQLite database
### BEGIN SOLUTION
engine = create_engine('sqlite:///tweet2.db')
### END SOLUTION

# Create the garbage_collection table within the database
Base.metadata.create_all(engine)

# To push the objects made and query the server we use a Session object
from sqlalchemy.orm import Session
session = Session(bind=engine)

# The database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///tweets2.sqlite"

db = SQLAlchemy(app)

# Create database tables
@app.before_first_request
def setup():
    db.create_all()

# Flask Routes
@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")


@app.route("/emoji_char")
def emoji_char_data():
    """Return emoji score and emoji char"""

    # query for the top 10 emoji data
    results = session.query(Garbage.Restaurants, Garbage.positive).\
        order_by(Garbage.positive.desc()).\
        limit(10).all()
    resturants_name = [result[0] for result in results]
    scores = [float(result[1]) for result in results]

    # Generate the plot trace
    plot_trace = {
        "x": resturants_name,
        "y": scores,
        "type": "bar"
    }
    return jsonify(plot_trace)


@app.route("/emoji_id")
def emoji_id_data():
    """Return emoji score and emoji id"""

    # query for the emoji data using pandas
    query_statement = session.query(Garbage).\
        order_by(Garbage.compound.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)
    print(df)
    # Format the data for Plotly
    plot_trace = {
        "x": df["Restaurants"].values.tolist(),
        "y": df["compound"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)


@app.route("/emoji_name")
def emoji_name_data():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    query_statement = session.query(Garbage).\
        order_by(Garbage.negative.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)

    # Format the data for Plotly
    plot_trace = {
        "x": df["Restaurants"].values.tolist(),
        "y": df["negative"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)

@app.route("/pie")
def pie_data():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    query_statement = session.query(Garbage).\
        order_by(Garbage.negative.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)
    print(df["Restaurants"][0])
    print([df["positive"][0],df["negative"][0]])
    # Format the data for Plotly
    plot_trace = {
        "values": [df["positive"][0],df["negative"][0]],
        "labels": ["positive","negative"],
        "type": "pie",
        "title": df["Restaurants"][0]
    }
    return jsonify(plot_trace)

@app.route("/pie2")
def pie_data_2():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    query_statement = session.query(Garbage).\
        order_by(Garbage.compound.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)
    print(df["Restaurants"][1])
    print([df["positive"][1],df["negative"][1]])
    # Format the data for Plotly
    plot_trace = {
        "values": [df["positive"][1],df["negative"][1]],
        "labels": ["positive","negative"],
        "type": "pie",
        "title": df["Restaurants"][1]
    }
    return jsonify(plot_trace)

@app.route("/pie3")
def pie_data_3():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    query_statement = session.query(Garbage).\
        order_by(Garbage.compound.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)
    print(df["Restaurants"][2])
    print([df["positive"][2],df["negative"][2]])
    # Format the data for Plotly
    plot_trace = {
        "values": [df["positive"][2],df["negative"][2]],
        "labels": ["positive","negative"],
        "type": "pie",
        "title": df["Restaurants"][2]
    }
    return jsonify(plot_trace)

@app.route("/pie4")
def pie_data_4():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    query_statement = session.query(Garbage).\
        order_by(Garbage.compound.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)
    print(df["Restaurants"][3])
    print([df["positive"][3],df["negative"][3]])
    # Format the data for Plotly
    plot_trace = {
        "values": [df["positive"][3],df["negative"][3]],
        "labels": ["positive","negative"],
        "type": "pie",
        "title": df["Restaurants"][3]
    }
    return jsonify(plot_trace)

@app.route("/pie5")
def pie_data_5():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    query_statement = session.query(Garbage).\
        order_by(Garbage.compound.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, session.bind)
    print(df["Restaurants"][4])
    print([df["positive"][4],df["negative"][4]])
    # Format the data for Plotly
    plot_trace = {
        "values": [df["positive"][4],df["negative"][4]],
        "labels": ["positive","negative"],
        "type": "pie",
        "title": df["Restaurants"][4]
    }
    return jsonify(plot_trace)


if __name__ == '__main__':
    app.run(debug=True)
