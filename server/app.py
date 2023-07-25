from flask import Flask, jsonify, request, abort, make_response, session
from flask_restful import Resource
from models import *
from config import app, db, api
from flask_migrate import Migrate  # Import Flask-Migrate
from flask_cors import CORS

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Add the following two lines to enable CORS for your app
CORS(app, supports_credentials=True)


class Signup(Resource):
    def post(self):
        try:
            data = request.get_json()
            new_user = User(
                email = data['email'],
                first_name = data['first_name'],
                last_name = data['last_name']
            )
            new_user.password_hash = data['password']
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return make_response(new_user.to_dict(), 201)
        except:
            return make_response({'errors':['validation errors']}, 400)

class CheckSession(Resource):
    def get(self):
        user_id = session['user_id']
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return make_response(user.to_dict(), 200)
        else:
            return make_response({"error": "No user currently logged in"}, 401)
        
class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.email == data['email']).first()
        if user:
            if user.authenticate(data['password']):
                session['user_id'] = user.user_id
                return user.to_dict(), 201
            else:
                return {"error": "Invalid Password"}, 401
        else:
            return {"error": "User not found"}, 404
        
class Logout(Resource):
    def delete(self):
        user_id = session['user_id']
        if user_id:
            session['user_id'] = None
            return {}, 204
        else:
            return {"error": "No user logged in currently"}, 401

api.add_resource(Signup, '/signup')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
