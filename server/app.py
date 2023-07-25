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
                last_name = data['last_name'],
                theme = 'default',
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

class Spells(Resource):
    def get(self):
        spells = Spell.query.all()
        return make_response([spell.to_dict() for spell in spells], 200)

class SpellsId(Resource):
    def get(self, id):
        spell = Spell.query.filter(Spell.id == id).first()
        if not spell:
            return make_response({'error': 'Spell not found'}, 404)
        return make_response(spell.to_dict(), 200)

class Campaigns(Resource):
    def post(self):
        try:
            data = request.get_json()
            user_id = session['user_id']
            campaign = Campaign(
                dm_id = user_id,
                name = data['name'],
                join_code = data['join_code']
            )
            db.session.add(campaign)
            db.session.commit()
            return make_response(campaign.to_dict(), 201)
        except:
            return make_response({'errors': ['validation errors']}, 401)

class CampaignsId(Resource):
    def get(self, id):
        campaign = Campaign.query.filter(Campaign.id == id).first()
        if campaign:
            return make_response(campaign.to_dict(), 200)
        return make_response({'error':'Campaign not found'}, 404)
    def delete(self, id):
        campaign = Campaign.query.filter(Campaign.id == id).first()
        if campaign:
            campaign.delete()
            return make_response({},204)
        return({'error':'Campaign not found'}, 404)
    def patch(self, id):
        campaign = Campaign.query.filter(Campaign.id == id).first()
        if campaign:
            try:
                data = request.get_json()
                for attr in data:
                    setattr(campaign, attr, data[attr])
                db.ssession.commit()
                return make_response(campaign.to_dict(), 202)
            except:
                return make_response({'errors':['Validation errors']}, 402)



api.add_resource(Signup, '/signup')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Spells, '/spells')
api.add_resource(SpellsId, '/spells/<int:id>')
api.add_resource(Campaigns, '/campaigns')
api.add_resource(CampaignsId, '/campaigns/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)