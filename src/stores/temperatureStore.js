import { observable, computed } from 'mobx';
import React, { Component } from 'react';

class Temperature {
 @observable unit = 'C';
 @observable Tc = 25;

 @computed get Tk = () => this.Tc*(9/5) + 32;

 @computed get Tf = () => this.Tc + 273.15; 
}