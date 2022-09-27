
# react-localized-datetime

## Usage

First you need to add language provider somewhere into your project

```jsx typescript
// App.tsx

import { DateTimeLocalizationProvider } from 'react-localized-datetime';

const App = () => (
    <DateTimeLocalizationProvider value="cs-cz">
        {/* children */}
    </DateTimeLocalizationProvider>
);

```


and then you just wrap the time string in localization component: 

```jsx typescript
import { LocalizedTime, LocalizedDateTime } from 'react-localized-datetime';


const Record = () => (
    <div>
        <LocalizedDateTime>2022-08-11 16:20:00</LocalizedDateTime>
        <span>{/* text */}</span>
    </div>
);

```
