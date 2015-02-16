#-*- coding: utf-8 -*-

from django import forms
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from mezzanine.pages.page_processors import processor_for
from .models import *
from django.db.models import Q


@processor_for('/')
def home_processor(request, page):
    univers_all = Univers.objects.all()
    for univers in univers_all:
        couv = univers.small_cover.url.split('/')
        univers.small_cover = couv[-1]
    revues = Revue.objects.all()
    for revue in revues:
        couv = revue.couverture.url.split('/')
        revue.couverture = couv[-1]
    return locals()

@processor_for(Univers)
def processor_univers(request, page):
    univers = Univers.objects.get(title=page.title)
    couv = univers.full_cover.url.split('/')
    univers.full_cover = couv[-1]
    revues = Revue.objects.filter(univers=univers)
    for revue in revues :
        couv = revue.couverture.url.split('/')
        revue.couverture = couv[-1]
    chiffres = Chiffre.objects.filter(univers=univers).order_by('?')[:3]
    return locals()

@processor_for(Revue)
def processor_revue(request, page):
    revue = Revue.objects.get(title=page.title)
    couv = revue.couverture.url.split('/')
    revue.couverture = couv[-1]
    contacts_revue = ContactRevue.objects.filter(revue=revue)
    univers = revue.univers
    revues_univers = Revue.objects.filter(Q(univers=univers)&~Q(title=page.title))
    for revue_univers in revues_univers :
        couv = revue_univers.couverture.url.split('/')
        revue_univers.couverture = couv[-1]
    return locals()
