#-*- coding: utf-8 -*-

from django.db import models
from mezzanine.pages.models import Page
from mezzanine.core.models import RichText
from settings import MEDIA_ROOT

# The members of Page will be inherited by the Author model, such
# as title, slug, etc. For authors we can use the title field to
# store the author's name. For our model definition, we just add
# any extra fields that aren't part of the Page model, in this
# case, date of birth.

class Univers(Page, RichText):
	small_cover = models.ImageField(upload_to=MEDIA_ROOT+'/univers/small_cover', verbose_name="Image représentant l'univers sur la page d'accueil; Taille recommandée: 800x450; Poinds maximal recommandé: 90 Ko")
	full_cover = models.ImageField(upload_to=MEDIA_ROOT+'/univers/full_cover', verbose_name="Image représentant l'univers sur la page Univers; Taille recommandée: 1600px de large; Poids maximal recommandé: 180Ko")

class Chiffre(models.Model):
	univers = models.ForeignKey(Univers)
	data_chiffre = models.CharField(max_length=100, verbose_name='Chiffre + unité (€,$,%...)')
	data_baseline = models.CharField(max_length=60, verbose_name='baseline du Chiffre')

class Revue(Page):
	univers = models.ForeignKey(Univers, verbose_name='Filière de la revue')
	couverture = models.ImageField(upload_to=MEDIA_ROOT+'/couvertures', verbose_name='Couverture de la revue; Taille recommandée : 300px de large; Poids maximal recommandé : 80 Ko ')
	# OPTION_FILIERE = (
	# 	('TABAC','TABAC'),
	# 	('CHR-CHD','CHR-CHD'),
	# 	('PAPIER EMBALLAGE & FILMS','PAPIER EMBALLAGE & FILMS'),
	# 	('PAPETERIE, FOURNITURE ET BUREAUTIQUE',
	# 		'PAPETERIE, FOURNITURE ET BUREAUTIQUE'),
	# 	('COMMUNICATION GRAND FORMAT','COMMUNICATION GRAND FORMAT')
	# )
	# filiere = models.CharField(choices=OPTION_FILIERE,max_length=250, 
	# 	verbose_name='Filière de la revue')
	OPTION_TYPE_REVUE = (
		('magazine','magazine'),
		('magazine grand format', 'magazine grand format'),
		('journal','journal'),
		('carnet format poche', 'carnet format poche'),
		('lettre professionnelle','lettre professionnelle'),
	)
	type_revue = models.CharField(choices=OPTION_TYPE_REVUE, max_length=250,
		verbose_name='Type de revue')
	format_revue = models.CharField(max_length=250, 
		verbose_name='Format de la revue')
	periodicite = models.CharField(max_length=250, 
		verbose_name='Période de la revue')
	tirage = models.IntegerField(verbose_name='Tirage de la revue (entrez un nombre)')
	pagination = models.IntegerField('Pagination moyenne (entrez un nombre)')
	lectorat = models.CharField(max_length=250, verbose_name='Description du lectorat')
	baseline = models.CharField(max_length=300, verbose_name='Baseline de la revue')
	presentation = models.TextField(verbose_name='Présentation de la revue')

class ContactRevue(models.Model):
	revue = models.ForeignKey(Revue)
	identite = models.CharField(max_length=250)
	intitule_fonction = models.CharField(max_length=250,null=True,blank=True)
	phone = models.CharField(max_length=28,null=True,blank=True)
	email = models.EmailField(max_length=250,null=True,blank=True)




