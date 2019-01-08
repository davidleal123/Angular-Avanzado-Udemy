import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  public tinyMceSettings = {
    skin_url: '../../assets/tinymce/skins/skins/lightgray',
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 320,
    plugins: 'fullscreen',
    language: 'es_MX'

  };


  constructor() { }

  ngOnInit() {
  }

}
