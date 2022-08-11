
# react-localized-datetime

## Usage

First you need to add language provider somewhere into your project

```react
// App.tsx


import { DateTimeLocalizationProvider } from 'react-localized-datetime';

...

<DateTimeLocalizationProvider value="cs-cz">
    {children}
</DateTimeLocalizationProvider>
    
...

```


and then you just wrap the time string in localization component: 

```react
import { LocalizedTime, LocalizedDateTime } from 'react-localized-datetime';


...

    <LocalizedDateTime>11/08/2022 16:20:00</LocalizedDateTime>

...

```
