"""add items table, create relation between characters and spells

Revision ID: 8ead2bbc70a7
Revises: da4fa6f50adb
Create Date: 2023-07-25 11:56:28.130134

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8ead2bbc70a7'
down_revision = 'da4fa6f50adb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('index', sa.String(), nullable=True),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('desc', sa.String(), nullable=True),
    sa.Column('weight', sa.Integer(), nullable=True),
    sa.Column('damage', sa.String(), nullable=True),
    sa.Column('dmg_type', sa.String(), nullable=True),
    sa.Column('weapon_range', sa.String(), nullable=True),
    sa.Column('weapon_category', sa.String(), nullable=True),
    sa.Column('atk_range', sa.String(), nullable=True),
    sa.Column('cost', sa.String(), nullable=True),
    sa.Column('rarity', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('campaigns',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dm_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('join_code', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['dm_id'], ['users.id'], name=op.f('fk_campaigns_dm_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('known_spells',
    sa.Column('character_id', sa.Integer(), nullable=True),
    sa.Column('spell_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['character_id'], ['characters.id'], name=op.f('fk_known_spells_character_id_characters')),
    sa.ForeignKeyConstraint(['spell_id'], ['spells.id'], name=op.f('fk_known_spells_spell_id_spells'))
    )
    op.drop_table('campaign')
    with op.batch_alter_table('characters', schema=None) as batch_op:
        batch_op.create_foreign_key(batch_op.f('fk_characters_owner_id_users'), 'users', ['owner_id'], ['id'])
        batch_op.create_foreign_key(batch_op.f('fk_characters_campaign_id_campaigns'), 'campaigns', ['campaign_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('characters', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_characters_campaign_id_campaigns'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_characters_owner_id_users'), type_='foreignkey')

    op.create_table('campaign',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('dm_id', sa.INTEGER(), nullable=True),
    sa.Column('name', sa.VARCHAR(), nullable=True),
    sa.Column('join_code', sa.VARCHAR(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('known_spells')
    op.drop_table('campaigns')
    op.drop_table('items')
    # ### end Alembic commands ###