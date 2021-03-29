import { Component, OnInit } from "@angular/core";
import { TranslatorService } from "./translator.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  languagesForm: FormGroup;
  languages: object[] = [];
  translation: string;

  constructor(private fb: FormBuilder, private translatorService: TranslatorService) { }

  ngOnInit(): void {
    this.collectLanguages();
    this.languagesForm = this.fb.group({
      languageOf: ['', Validators.required],
      languageTo: ['', Validators.required],
      TextToTranslate: ['', Validators.required]
    })
  }

  collectLanguages() {
    this.translatorService.collectLanguages().subscribe({
      next: languages => {
        for (const language of languages) {
          this.languages.push({
            language: language['language'],
            language_name: language['language_name']
          });
        }
      },
      error: err => console.error(err)
    })
  }

  translate(data: object[]) {
    this.translatorService.translate(data).subscribe({
      next: tranlation => {
        this.translation = tranlation[0]['translation'];
      },
      error: err => console.error(err)
    })
  }

  onSubmit() {
    if (!this.languagesForm.value.languageOf || !this.languagesForm.value.languageTo || !this.languagesForm.value.TextToTranslate) {
      return;
    }

    this.translate(this.languagesForm.value);
  }
}
