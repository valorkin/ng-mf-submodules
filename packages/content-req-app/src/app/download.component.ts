import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe1-download',
    template: `

      <h2>Get it!</h2>
        <div class="task">
            <img src="https://static.cargurus.com/images/site/2008/06/13/18/41/1967_shelby_cobra-pic-30251-1600x1200.jpeg">
            <p>Download</p>
        </div>
    `
})

export class DownloadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
