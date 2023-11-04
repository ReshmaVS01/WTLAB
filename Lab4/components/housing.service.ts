import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'University of Chicago',
      city: 'Chicago',
      state: 'IL',
      photo: `https://cdn.britannica.com/39/160139-050-147B020E/Eckhart-Hall-campus-
Ryerson-Physical-Laboratory-University.jpg`,
      available_courses: 19,
 rank: 10,
      wifi: true,
    },
{
id: 1,
      name: 'Northwestern University',
      city: 'Evanston',
      state: 'IL',
      photo: `https://news.northwestern.edu/assets/Stories/2023/04/campus1940__FitMax
Wzk3MCw2NTBd.jpg`,
      available_courses: 23,
rank: 3,
       wifi: true,
    },
{
id: 2,
      name: 'Yale University',
      city: 'New Haven',
      state: 'CT',
      photo: `https://collegevine.imgix.net/f2810a3e-aae3-4cb6-a808-
46bac7d5e347.jpg?h=300&fit=crop&crop=edges&auto=format`,
      available_courses: 21,
rank: 4,
      wifi: true,
    },
{
id: 3,
      name: 'Columbia University',
      city: 'New York City',
      state: 'NY',
      photo: `https://www.insidehighered.com/sites/default/files/media/columbia.jpg`,
      available_courses: 27,
rank: 5,
      wifi: true,
    },
{
       id: 4,
      name: 'University of Pennsylvania',
      city: 'Philadelphia',
      state: 'PA',
      photo: `https://menlocoaching.com/wp-content/uploads/2022/01/1600px-UPenn_Quad-
1024x768.jpeg`,
      available_courses: 30,
rank: 6,
      wifi: true,
    },
{
id: 5,
      name: 'Massachusetts Institute of Technology(MIT)',
      city: 'Cambridge',
      state: ' Massachusetts',

       photo: `https://news.mit.edu/sites/default/files/styles/news_article__image_gal
lery/public/images/201709/%2520Aerial-AboveSummit-
Christopher%2520Harting_2.png?itok=dFHQI8zn`,
      available_courses: 40,
      rank: 1,
      wifi: true,
}, {
id: 6,
name: 'University of Washington',
city: 'Seattle',
state: ' Washington',
       photo: `https://images.shiksha.com/mediadata/images/1533799020php51QuI1.jpeg`,
      available_courses: 33,
      rank: 7,
      wifi: true,
}, {
McGoldrick-Learning-Commons-Seattle.jpg`,
      available_courses: 29,
rank: 8,
      wifi: true,
    },
{
id: 8,
      name: 'Seattle Pacific University',
      city: 'Seattle',
      state: ' Washington',
      photo: `https://images.seattletimes.com/wp-
content/uploads/2023/06/06162023_SPU-cuts_133135.jpg?d=2040x1360`,
      available_courses: 31,
id: 7,
name: 'Seattle University',
city: 'Seattle',
state: ' Washington',
photo: `https://cdn.britannica.com/00/153800-050-82974F6B/Lemieux-Library-and-
 rank: 9,
      wifi: true,
    },
{
id: 9,
      name: 'Harvard University',
      city: 'Cambridge',
      state: ' Massachusetts',
      photo: `https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-
Harvard-Business-School-Boston-University.jpg`,
      available_courses: 42,
rank: 2,
      wifi: true,
    },
];

getAllHousingLocations(): HousingLocation[] {
  return this.housingLocationList;
}
getHousingLocationById(id: number): HousingLocation | undefined {
  return this.housingLocationList.find(
    (housingLocation) => housingLocation.id === id
  );
}
submitApplication(firstName: string, lastName: string, email: string) {
console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, em
ail: ${email}.`
    );
} }
