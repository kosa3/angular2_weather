import {Component} from "angular2/src/core/metadata";
import {ControlGroup} from "angular2/src/common/forms/model";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";
import {Subject} from "rxjs/Subject";
@Component({
    selector: 'weather-search',
    template:`
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value)" required #input>
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found:</span> {{ data.name }}
            </div>
        </section>
    `
})

export class WeatherSearchComponent
{
    private searchStream = new Subject<string>();
    data: any = {};

    constructor (private _weatherService: WeatherService) {}

    onSubmit(form: ControlGroup) {
        this._weatherService.searchWeatherDate(form.value.location)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }

    onSearchLocation(cityName: string) {
        this.searchStream
            .next(cityName);
    }

    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((input:string) => this._weatherService.searchWeatherDate(input))
            .subscribe(
                data => this.data = data
            );
    }
}