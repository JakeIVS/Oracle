import requests
from models import *


def seed_spells():
    print('Generating spells...')
    response = requests.get('https://www.dnd5eapi.co/api/spells').json()
    spell_list = response['results']
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
            material = data['material'],
            is_ritual = 0 if not data['ritual'] else 1,
            requires_concentration = 0 if not data['concentration'] else 1,
            casting_time = data['casting_time'],
            url = data['url']
        )

def seed_items():
    pass
