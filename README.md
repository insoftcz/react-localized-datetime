
# react-localized-datetime

## Usage

First you need to add language provider somewhere into your project

```typescript jsx
// App.tsx


import { DateTimeLocalizationProvider } from 'react-localized-datetime';

...

<DateTimeLocalizationProvider value="cs-cz">
    {children}
</DateTimeLocalizationProvider>
    
...

```


and then you just wrap the time string in localization component: 

```typescript jsx
import { LocalizedTime, LocalizedDateTime } from 'react-localized-datetime';


...

    <LocalizedDateTime>2022-08-11 16:20:00</LocalizedDateTime>

...

```
