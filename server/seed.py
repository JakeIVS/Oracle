import requests
from models import *
from config import db, app

def data_wipe():
    print("Clearing old data...")
    Spell.query.delete()
    print('Complete.')

def seed_spells():
    print('Generating spells...')
    response = requests.get('https://www.dnd5eapi.co/api/spells').json()
    spell_list = response['results']
    seeded_spells = []
    for spell in spell_list:
        url = spell['url']
        data = requests.get(f'https://www.dnd5eapi.co{url}').json()
        new_spell = Spell(
            index = data['index'],
            name = data['name'],
            level = data['level'],
            desc = " ".join(data['desc']),
            higher_level = " ".join(data['higher_level']),
            spell_range = data['range'],
            duration = data['duration'],
            components = ", ".join(data['components']),
            is_ritual = 0 if not data['ritual'] else 1,
            requires_concentration = 0 if not data['concentration'] else 1,
            casting_time = data['casting_time'],
            url = data['url']
        )
        db.session.add(new_spell)
        db.session.commit()
        seeded_spells.append(new_spell)
    print(f'Complete: {len(seeded_spells)} spells seeded.')


# uncomment below for item seeding

# def seed_items():
#     print('Generating items...')
#     response = requests.get('https://www.dnd5eapi.co/api/equipment').json()
#     item_list = response['results']
#     seeded_items = []
#     for item in item_list:
#         url = item['url']


if __name__ == '__main__':
    with app.app_context():
        data_wipe()
        seed_spells()