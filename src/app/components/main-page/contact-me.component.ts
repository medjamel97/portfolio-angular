import {Component, OnInit} from '@angular/core';
import * as emailjs from 'emailjs-com';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
})
export class ContactMeComponent implements OnInit {
    private SERVICE_ID = 'service_bbgdy86';
    private IP_TEMPLATE_ID = 'template_rd3n6lo';
    private CONTACT_TEMPLATE_ID = 'template_rlk68ay';
    private PUBLIC_KEY = 'nyV0d0fQFXY7_LQ-e';

    name: string = '';
    email: string = '';
    message: string = '';

    constructor(private http: HttpClient) {
    }

    public getIPAddress() {
        return this.http.get("https://api.ipify.org/?format=json");
    }

    ngOnInit() {
        this.getIPAddress().subscribe(
            (res: any) => {
                console.log(res)
                this.sendEmailOnLoad(res.ip);
            }, error => {
                console.log(error)
                this.sendEmailOnLoad(error.message);
            });
    }

    private sendEmailOnLoad(ipAddress: string) {
        const data = {ip_address: ipAddress};

        emailjs.init(this.PUBLIC_KEY);
        emailjs.send(this.SERVICE_ID, this.IP_TEMPLATE_ID, data);
    }

    handleSubmit() {
        this.getIPAddress().subscribe(
            (res: any) => {
                emailjs.init(this.PUBLIC_KEY);

                const data = {
                    ip_address: res.ip,
                    name: this.name,
                    email: this.email,
                    message: this.message,
                };

                emailjs.send(this.SERVICE_ID, this.CONTACT_TEMPLATE_ID, data)
                    .then((_) => {
                        alert('Message sent !');
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }, (error) => {
                        console.error('Email could not be sent:', error);
                    });
            }, error => {
                console.log(error)
                this.sendEmailOnLoad("Error contact" + error.message);
            });
    }
}
