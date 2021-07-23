# This is a sample Python script.
from flask import Flask
from flask import Flask, render_template, request, send_file, send_from_directory, jsonify
import time
import pickle
import json
import numpy as np
import yaml
import configparser
config = configparser.ConfigParser()
config.read('database.ini')
# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

##
# load SVM model to classify Iris flowers
filename = 'svm_model.sav'
model = pickle.load(open(filename, 'rb'))

app = Flask(__name__)
# This is a sample Python script.
import mysql.connector

db = mysql.connector.connect(
    host=config['DB']['host'],
    user=config['DB']['user'],
    passwd=config['DB']['passwd'],
    database=config['DB']['database'],
)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/ml', methods=['POST'])
def make_prediction():
    json_string = json.dumps(request.json)
    values_dict = json.loads(json_string)

    print('parsed json: ' + str(values_dict))
    features = []
    for key in values_dict.keys():
        for measurement in values_dict[key]:
            features.append(float(measurement))
    features = np.reshape(features, (1,-1))
    labels = model.predict(features)
    species = labels[0]
    # If species is 0 species is setosa else if species is 1 then species is VersiColor else it is Virginica
    if species == 0:
        s = "It is Iris Setosa"
    elif species == 1:
        s = "It is Iris VersiColor"
    else:
        s = "It is Iris Virginica"
    # Returning the response to ajax
    return json.dumps(s)

@app.route('/post')
def insert_blog_post():
    cur = db.cursor()
    #insert_sql = 'INSERT INTO customers (name, address) VALUES (%s, %s)'
    #insert_sql = 'INSERT INTO customers (name, address) VALUES (%s, %s)'
    cur.execute("INSERT INTO blog_posts (idblog_posts, title, body, blurb) VALUES (4, 'NEW', 'THIS IS A NEW POST', 'a new post')")
    db.commit()
    cur.close()
    return 'success'

@app.route('/get_posts')
def get_blog_posts():
    titles = []
    bodies = []
    blurbs = []

    cur = db.cursor()
    cur.execute("SELECT * FROM website_db.blog_posts")
    for r in cur.fetchall():
        titles.append(r[1])
        bodies.append(r[2])
        blurbs.append(r[3])
    print(titles)
    results = {
        "titles" : titles,
        "bodies" : bodies,
        "blurbs": blurbs,
    }

    json_results = json.dumps(results)
    cur.close()
    return json_results



@app.route('/get_recent_posts')
def get_recent_blog_posts():

    results = {
        "titles" : [],
        "bodies": [],
        "dates": [],
        "meta": [],
        "categories": [],
        "image_paths": []
    }

    cur = db.cursor()
    cur.execute("SELECT Body, Date, Meta, Title, category, image_path FROM blogposts INNER JOIN categories on blogposts.idCategories = categories.idCategories INNER JOIN blogpostimages on blogposts.idBlog_Posts = blogpostimages.idBlog_Posts ORDER BY Date DESC")
    for r in cur.fetchall():
        results['bodies'].append(r[0])
        results['dates'].append(str(r[1]))
        results['meta'].append(r[2])
        results['titles'].append(r[3])
        results['categories'].append(r[4])
        results['image_paths'].append(r[5])


    json_results = json.dumps(results)
    cur.close()
    return json_results



@app.route('/get_posts_by_topic')
def get_blog_posts_by_topic():
    results = {
        "titles": [],
        "bodies": [],
        "dates": [],
        "meta": [],
        "categories": [],
        "image_paths": []
    }

    json_string = json.dumps(request.json)
    values_dict = json.loads(json_string)
    print(values_dict)


@app.route('/blog_sign_up', methods=['POST'])
def blog_sign_up():
    json_string = json.dumps(request.json)
    values_dict = json.loads(json_string)
    features = []
    name = str(values_dict['formValues'][0])
    email = str(values_dict['formValues'][1])
    print(name)
    print(email)

    cur = db.cursor()
    cur.execute("INSERT INTO website_db.blog_sign_up (sign_up_name, sign_up_email) VALUES (%s, %s)", (name, email))
    db.commit()

    json_string = json.dumps(request.json)
    values_dict = json.loads(json_string)
    print(values_dict)
    cur.close()
    return json.dumps(True)



