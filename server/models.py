from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db, bcrypt


# export FLASK_APP=app.py
# export FLASK_RUN_PORT=5555
# flask db init 


# flask db revision --autogenerate -m"create tables"
# flask db upgrade head

known_spell = db.Table(
    'known_spells',
    db.Column('character_id', db.Integer, db.ForeignKey('character.id')),
    db.Column('spell_id', db.Integer, db.ForeignKey('spell.id'))
    )

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    _password_hash = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

class Character(db.Model, SerializerMixin):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String)
    race = db.Column(db.String)
    gender = db.Column(db.String)
    character_class = db.Column(db.String)
    level = db.Column(db.Integer)
    hit_point_max = db.Column(db.Integer)
    current_hp = db.Column(db.Integer)
    strength_score = db.Column(db.Integer)
    dexterity_score = db.Column(db.Integer)
    constitution_score = db.Column(db.Integer)
    intelligence_score = db.Column(db.Integer)
    wisdom_score = db.Column(db.Integer)
    charisma_score = db.Column(db.Integer)
    proficiency_bonus = db.Column(db.Integer)
    speed = db.Column(db.Integer)
    languages = db.Column(db.String)
    senses = db.Column(db.String)
    armor_proficiencies = db.Column(db.String)
    weapon_proficiencies = db.Column(db.String)
    tool_proficiencies = db.Column(db.String)

    spells = db.relationship('Spell', secondary=known_spell, backref='characters', cascade='all, delete-orphan')


class Campaign(db.Model, SerializerMixin):
    __tablename__ = 'campaigns'


    id = db.Column(db.Integer, primary_key=True)
    dm_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String)
    join_code = db.Column(db.String)

class Spell(db.Model, SerializerMixin):
    __tablename__ = 'spells'


    id = db.Column(db.Integer, primary_key=True)
    index = db.Column(db.String)
    name = db.Column(db.String)
    level = db.Column(db.Integer)
    desc = db.Column(db.String)
    higher_level = db.Column(db.String)
    spell_range = db.Column(db.String)
    duration = db.Column(db.String)
    components = db.Column(db.String)
    material = db.Column(db.String)
    is_ritual = db.Column(db.Integer)
    requires_concentration = db.Column(db.Integer)
    casting_time = db.Column(db.String)
    url = db.Column(db.String)



class Item(db.Model, SerializerMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    index=db.Column(db.String)
    name = db.Column(db.String)
    desc = db.Column(db.String)
    weight = db.Column(db.Integer)
    damage = db.Column(db.String)
    dmg_type = db.Column(db.String)
    weapon_range = db.Column(db.String)
    weapon_category = db.Column(db.String)
    atk_range = db.Column(db.String)
    cost = db.Column(db.String)
    rarity = db.Column(db.String)
