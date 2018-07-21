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

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

#################################################
# Dumb Bullshit - Importing library from notebook
#################################################
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


# Collect all of the items and print their information
### BEGIN SOLUTION
# items = session.query(Garbage)
# for item in items:
#     print("-"*12)
#     print(f"id: {item.id}")
#     print(f"Restaurants: {item.Restaurants}")

### END SOLUTION



########################################################



# The database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///tweets2.sqlite"

db = SQLAlchemy(app)


# class Emoji(db.Model):
#     # __tablename__ = 'emoji'
#     __tablename__ = 'tweets2'

#     id = db.Column(db.Integer, primary_key=True)
#     Restaurants = db.Column(db.String())
#     compound = db.Column(db.Float())
#     negative = db.Column(db.Float())
#     positive = db.Column(db.Float())
#     Restaurant_Name = db.Column(db.String())
#     Coordinates = db.Column(db.String())
#     Cuisine = db.Column(db.String())
#     Latitude = db.Column(db.Float())
#     Longitude = db.Column(db.Float())
#     Zomato_Avg_Rating = db.Column(db.Float())

#     def __repr__(self):
#         return '<Emoji %r>' % (self.name)

# class Emoji(db.Model):
#     # __tablename__ = 'emoji'
#     __tablename__ = 'tweets2'

#     id = db.Column(db.Integer, primary_key=True)
#     Restaurants = db.Column(db.String())
#     compound = db.Column(db.Float())
#     negative = db.Column(db.Float())
#     positive = db.Column(db.Float())
#     Restaurant_Name = db.Column(db.String())
#     Coordinates = db.Column(db.String())
#     Cuisine = db.Column(db.String())
#     Latitude = db.Column(db.Float())
#     Longitude = db.Column(db.Float())
#     Zomato_Avg_Rating = db.Column(db.Float())

#     def __repr__(self):
#         return '<Emoji %r>' % (self.name)


# Create database tables
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()

#################################################
# Flask Routes
#################################################


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
    print(results[0][0])
    print(results[0][1])
    # Select the top 10 query results
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
    query_statement = db.session.query(Emoji).\
        order_by(Emoji.score.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, db.session.bind)

    # Format the data for Plotly
    plot_trace = {
        "x": df["emoji_id"].values.tolist(),
        "y": df["score"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)


@app.route("/emoji_name")
def emoji_name_data():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    results = db.session.query(Emoji.name, Emoji.score).\
        order_by(Emoji.score.desc()).\
        limit(10).all()
    df = pd.DataFrame(results, columns=['name', 'score'])

    # Format the data for Plotly
    plot_trace = {
        "x": df["name"].values.tolist(),
        "y": df["score"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)


if __name__ == '__main__':
    app.run(debug=True)
