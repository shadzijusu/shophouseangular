import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-icon',
    template: `
<svg class="w-6 h-6 hover:cursor-pointer hover:w-8 hover:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>

`,
})
export class UserIconComponent {
    @Input() classNames: string = 'w-6 h-6';
}