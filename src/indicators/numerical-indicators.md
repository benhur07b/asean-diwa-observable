---
theme: air
style: ../assets/css/diwa.css
---

# Numerical indicators

<div class="card card-note">
<strong>NOTE</strong><br>
The visualizations presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br><br>

<h2 id="indicators_gender_gap_internet_access">Gender Gap in Internet Access</h2>

<div class="card">
The difference between the percentage of women and the percentage of men who use the internet within a given population. 

A positive value indicates women generally have more access while a negative value indicates they generally have less.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_gender_gap_internet_access).
</div>

```js
const indicators_gender_gap_internet_access = FileAttachment("../data/indicators_numerical_gender_gap_internet_access.csv").csv({typed: true});
```

```js
const indicators_gender_gap_internet_access_filtered = indicators_gender_gap_internet_access.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
    x: {label: "Gap (%)"},
    marginLeft: 180,
    width: 960,
    title: "Gender Gap in Internet Access",
    subtitle: "Using most recent data available",
    caption: "A positive value indicates women have more access than men.",
    marks: [
        Plot.barX(
            indicators_gender_gap_internet_access_filtered, 
            {y: "country_year", x: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisY({label: null}),
        Plot.axisX({label: "Gender Gap in Internet Access (%)"}),
]
})
```

<!-- ```js
Inputs.table(indicators_gender_gap_internet_access, {
    format: {
        year: (x) => (String(x)),    
    }
})
``` -->

<!-- ```js
// Radio button input to choose market segment
const select_country_num0001 = view(
    Inputs.select(
        d3.group(indicators_gender_gap_internet_access, (d) => d.country),
        {sort: true, label: "Select Country"}
    )
);
// const pickCountryIndicatorsGenderGapInternetAccess = Generators.input(pickCountryIndicatorsGenderGapInternetAccessInput);
``` -->
<br>

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.

<br>

<h2 id="indicators_women_in_ict_workforce">Percentage of Women in the ICT Workforce</h2>

<div class="card">
The proportion of women among all individuals employed in ICT-related occupations or the ICT sector, expressed as a percentage.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_women_in_ict_workforce).
</div>

```js
const indicators_women_in_ict_workforce = FileAttachment("../data/indicators_numerical_women_in_ict_workforce.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Percentage of Women in the ICT Workforce",
  subtitle: "Using most recent data available",
  y: {label: "Women in the ICT Workforce (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_women_in_ict_workforce_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_women_in_ict_workforce_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

<br>

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.

<br>

<h2 id="indicators_women_in_ict_management">Percentage of Women in ICT Management Positions</h2>

<div class="card">
The proportion of women occupying managerial or leadership roles within the ICT sector, expressed as a percentage.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_women_in_ict_management).
</div>

```js
const indicators_women_in_ict_management = FileAttachment("../data/indicators_numerical_women_in_ict_management.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_management_filtered = indicators_women_in_ict_management.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Percentage of Women in ICT Management Positions",
  subtitle: "Using most recent data available",
  y: {label: "Women in ICT Management (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_women_in_ict_management_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_women_in_ict_management_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```
<br>

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.

<br>

<h2 id="indicators_women_in_ict_leadership">Percentage of Women in ICT Leadership Roles</h2>

<div class="card">
The proportion of women in high-level leadership positions (e.g., C-suite or board roles) within ICT organizations.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_women_in_ict_leadership).
</div>


```js
const indicators_women_in_ict_leadership = FileAttachment("../data/indicators_numerical_women_in_ict_leadership.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_leadership_filtered = indicators_women_in_ict_leadership.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Percentage of Women in the ICT Leadership",
  subtitle: "Using most recent data available",
  y: {label: "Women in the ICT Leadership (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_women_in_ict_leadership_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_women_in_ict_leadership_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```
<br>

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.

<br>

<h2 id="indicators_gender_paygap_in_ict">Gender Pay Gap in ICT Sector</h2>

<div class="card">
The difference in average earnings between men and women in the ICT sector, typically expressed as a percentage of men’s earnings (e.g., women earn 18-30% less than men).
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_gender_paygap_in_ict).
</div>

```js
const indicators_gender_paygap_in_ict = FileAttachment("../data/indicators_numerical_gender_paygap_in_ict.csv").csv({typed: true});
```

```js
const indicators_gender_paygap_in_ict_filtered = indicators_gender_paygap_in_ict.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
    x: {label: "Gap (%)"},
    marginLeft: 160,
    width: 960,
    title: "Gender Pay Gap in ICT",
    subtitle: "Using most recent data available",
    caption: "The higher the value, the higher the pay gap (e.g. 10% means women earn 10% less than men).",
    marks: [
        Plot.barX(
            indicators_gender_paygap_in_ict_filtered, 
            {y: "country_year", x: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisY({label: null}),
        Plot.axisX({label: "Gender Pay Gap in ICT (%)"}),
]
})
```


<br>

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.

<br>

<h2 id="indicators_women_graduates_in_stem">Percentage Women Graduates in STEM Fields</h2>

<div class="card">
The proportion of women among all graduates in science, technology, engineering, and mathematics (STEM) fields, expressed as a percentage.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_women_graduates_in_stem).
</div>

```js
const indicators_women_graduates_in_stem = FileAttachment("../data/indicators_numerical_women_graduates_in_stem.csv").csv({typed: true});
```

```js
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Percentage Women Graduates in STEM Fields",
  subtitle: "Using most recent data available",
  y: {label: "Graduates in STEM (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_women_graduates_in_stem_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_women_graduates_in_stem_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```
<br>

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.

<br>

<h2 id="indicators_enrolment_rates_in_ict">Enrolment Rates in ICT-Related Courses</h2>

<div class="card">
The percentage of male/female students enrolled in educational programs related to ICT, such as computer science or telecommunications.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_enrolment_rates_in_ict).
</div>


```js
const indicators_enrolment_rates_in_ict = FileAttachment("../data/indicators_numerical_enrolment_rates_in_ict.csv").csv({typed: true});
```

```js
const indicators_enrolment_rates_in_ict_filtered = indicators_enrolment_rates_in_ict.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        const femaleRow = row.indicator_name.includes('Female');
        if (femaleRow) {
            return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
            }
        } else {
            return null;
        }
        })
        .filter(row => row !== null)
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Enrolment Rates in ICT-related Courses",
  subtitle: "Using most recent data available",
  y: {label: "Enrolment (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_enrolment_rates_in_ict_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_enrolment_rates_in_ict_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```
<br>
<div>
This dataset measures enrolment rates in ICT-related courses by gender mostly across Singapore between 1991 and 2023 and in Cambodia (2022). Each entry records the percentage of male or female students enrolled in ICT programs in a given year, with figures sourced from Singapore’s Ministry of Education and USAID (for Cambodia). The data allows for comparison of male and female
participation over three decades, reflecting broader gender dynamics in access to ICT education.
</div>
<br>
<div>
For Singapore, the averages show clear disparity: men account for about 65% of ICT enrolments, while women make up only 34%. The range of values illustrates the imbalance. Among women, enrolment peaks at 45% in Singapore (1991) and has shown a consistent decline over the years. Men’s enrollment, by contrast, stays consistently high, ranging from 55% to 72%. These figures underscore a persistent tilt toward male dominance in ICT education, with women rarely approaching parity.
</div>
<br>
<div>
The gender gaps are wide and consistent. In Singapore throughout the 1990s and 2000s, the gap regularly exceeded 20 percentage points, with men enrolling at nearly double the rate of women. The trend is clear: while ICT enrolment has grown, women remain significantly underrepresented, pointing to systemic barriers that have yet to be fully addressed.

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.
</div>

<br>

<h2 id="indicators_completion_rates_in_ict">Completion Rates in ICT-Related Courses</h2>


<div class="card">
The percentage of male/female students who successfully complete ICT-related educational programs.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_completion_rates_in_ict).
</div>

```js
const indicators_completion_rates_in_ict = FileAttachment("../data/indicators_numerical_completion_rates_in_ict.csv").csv({typed: true});
```

```js
const indicators_completion_rates_in_ict_filtered = indicators_completion_rates_in_ict.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        const femaleRow = row.indicator_name.includes('Female');
        if (femaleRow) {
            return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
            }
        } else {
            return null;
        }
        })
        .filter(row => row !== null)
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 540,
  grid: true,
  title: "Completion Rates in ICT-related Courses",
  subtitle: "Using most recent data available",
  y: {label: "Enrolment (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_completion_rates_in_ict_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_completion_rates_in_ict_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```
<br>

<div>
This dataset records completion rates in ICT-related courses by gender from 2005 to 2023, but only for Singapore. No other ASEAN countries have reported data on ICT completion within this dataset. Each entry captures the share of men or women completing ICT programs in Singapore, drawn from the Ministry of Education. This makes the dataset unique in its focus: while other datasets provide cross-country comparisons on enrolment and graduation, this one limits insight to a single national context.
</div>
<br>
<div>
At the aggregate level, women have slightly higher completion rates than men. On average, 33% of female students completed ICT courses, compared to 30% of male students. The range of values is narrow: women’s completion rates span from 26% to 40%, while men’s range from 27% to 34%. These figures suggest a stable pattern over time, without the wide swings seen in enrolment or graduation data across the region.
</div>
<br>
<div>
When examining the gender gap, the differences are modest but consistent. In some years, such as 2005, the gap is negligible with men and women completing ICT courses at nearly identical rates. In other years, women outperform men, with gaps of up to 5 percentage points in their favor. The absence of comparable data from other ASEAN countries makes Singapore an outlier in reporting, but its experience suggests that once women enter ICT pathways, they are just as likely, if not slightly more likely, than men to finish successfully.

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.
</div>

<br>

<h2 id="indicators_gender_phone_ownership">Phone Ownership</h2>

<div class="card">
The percentage of individuals who own a mobile telephone, disaggregated by gender.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_gender_phone_ownership).
</div>

```js
const indicators_gender_phone_ownership = FileAttachment("../data/indicators_numerical_gender_phone_ownership.csv").csv({typed: true});
```

```js
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
    color: {range: ["#C8057C", "#4CB391"], legend: true},
    y: {axis: null, label: null},
    x: {tickFormat: "s", grid: true, label: "Phone ownership (%)"},
    width: 960,
    marginLeft: 180,
    title: "Phone Ownership",
    subtitle: "Using most recent data available",
    marks: [
        Plot.barX(
          indicators_gender_phone_ownership_filtered, {
            y: "indicator_name",
            x: "indicator_value",
            fill: "indicator_name",
            fy: "country_year",
            // sort: {x: null, color: null, fx: {value: "-y", reduce: "sum"}},
            tip: true,
            r: 16
          }
        ),
        // Plot.axisX({label: "Year"}),
        Plot.axisX({label: "Phone ownership (%)"}),
    ]
})
```

<br>
<div>
This dataset provides a comprehensive picture of mobile phone ownership by gender across ten Southeast Asian countries, Brunei Darussalam, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, and Timor Leste, between 2015 and 2024. It records the percentage of men and women who own a phone each year, making it possible to compare trends across time, countries, and genders. While the values themselves are complete, metadata such as sources and subnational detail are uneven: Malaysia’s entries are well-documented, but most other countries lack source references.
</div>
<br>
<div>
At the regional level, ownership is high but not universal. On average, 84% of men and 79% of women report owning a phone, reflecting significant progress in digital access but also a persistent gap of around five percentage points. The range of values is wide: in Indonesia in 2015, just 50% of women and 63% of men owned a phone, while in Malaysia, Brunei, Singapore, and Thailand, ownership has reached 95-99%, highlighting both economic disparities and uneven progress across the region. Gender gaps also vary: in higher-income countries they are minimal, sometimes even reversing, as in Brunei in 2019 when women outpaced men; whereas in lower-income settings like Indonesia in the mid-2010s, women lagged men by more than ten points.
</div>
<br>
<div>
Taken together, the data shows a region in the midst of digital transformation. Countries with lower initial levels of ownership, such as Cambodia, Indonesia, and Timor Leste, demonstrate steady growth, while wealthier states remain stable at near-universal access. The gender gap, although persistent in some contexts, has narrowed over time as ownership rates rise across the board. The dataset therefore illustrates both the successes of digital inclusion and the unevenness of progress, capturing a dual story of rising access and shrinking yet enduring inequalities.

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.
</div>
<br>

<h2 id="indicators_ict_skills">Proportion of Youth and Adults with ICT Skills</h2>

<div class="card">
The percentage of youth (aged 15-24) and adults (aged 15+) who have specific ICT skills, categorized by skill type. Disaggregated if possible.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_ict_skills).
</div>

```js
const indicators_ict_skills = FileAttachment("../data/indicators_numerical_ict_skills.csv").csv({typed: true});
```

```js
const skills_attach = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Attach File");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Attach File")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Attach File";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Attach File)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_attach, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_attach, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_internet = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Connect to Internet");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Connect to Internet")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Connect to Internet";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Connect to Internet)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_internet, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_internet, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_copypaste = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Copy Paste");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Copy Paste")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Copy Paste";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Copy Paste)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_copypaste, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_copypaste, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_createfile = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Create File");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Create File")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Create File";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Create File)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_createfile, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_createfile, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_duplicatefile = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Duplicate File");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Duplicate File")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Duplicate File";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Duplicate File)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_duplicatefile, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_duplicatefile, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_install = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Install Software");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Install Software")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Install Software";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Install Software)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_install, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_install, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_mathspreadsheet = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Mathematical Formula (Spreadsheet)");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Mathematical Formula (Spreadsheet)")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Mathematical Formula (Spreadsheet)";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Mathematical Formula (Spreadsheet))",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_mathspreadsheet, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_mathspreadsheet, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_prog = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Programming Language");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Programming Language")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Programming Language";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Programming Language)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_prog, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_prog, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const skills_transfer = indicators_ict_skills.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Transfer File");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Transfer File")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Transfer File";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Youth and Adult w/ ICT Skills (Transfer File)",
  subtitle: "Using most recent data available",
  y: {label: "Youth and Adult w/ ICT Skills (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(skills_transfer, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(skills_transfer, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

<br>

<div>
This dataset measures the proportion of youth and adults with ICT skills across seven ASEAN countries, Singapore, Brunei Darussalam, Malaysia, Laos, Indonesia, the Philippines, and Timor Leste, between 2015 and 2023. Each entry reflects the percentage of people able to perform specific digital tasks, ranging from basic actions like copy-pasting files or sending emails with attachments to more advanced abilities like programming, online security configuration, and creating electronic presentations.
</div>
<br>
<div>
At the regional level, ICT proficiency averages about 41%, but the range of values is wide. The lowest recorded skill levels fall below 1% (for advanced programming in certain contexts), while the highest reach 89% (for everyday digital tasks like messaging or file transfers). This spread highlights the contrast between nearly universal uptake of basic digital literacy and the limited adoption of advanced technical skills.
</div>
<br>
<div>
The skill gaps within the dataset are clear. Basic ICT skills. such as using spreadsheets, sending attachments, and accessing digital content, are widely reported across populations, often exceeding 60-70%. By contrast, advanced skills like coding, app development, and digital security measures lag significantly, frequently under 20-30%. The result is a regional profile where populations are confident in day-to-day ICT use but remain underrepresented in the higher-end technical skills needed for deeper participation in the digital economy.

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.
</div>
<br>

<h2 id="indicators_graduates_by_field">Share of Female Graduates by Field</h2>

<div class="card">
World Bank indicator measures the percentage of female graduates across different fields of study in tertiary education.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_graduates_by_field).
</div>

```js
const graduates_by_field = FileAttachment("../data/indicators_numerical_graduates_by_field.csv").csv({typed: true});
```

```js
const grad_arts_and_humanities = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Arts and Humanities");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Arts and Humanities")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Arts and Humanities";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);

// const indicators_graduates_by_field_filtered = graduates_by_field.reduce((acc, current) => {
//     const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
//     if (!existingCountry) return [...acc, current];
//     if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
//     return [...acc];
// }, [])
//     .sort((a, b) => a.country.localeCompare(b.country))
//     .map((row) => {
//         return {
//             country_year: `${row.country} (${row.year})`,
//             indicator_name: row.indicator_name,
//             indicator_value: row.indicator_value,
//             sub_indicator_name: row.sub_indicator_name
//         }
//     });
```

```js
const grad_agri = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Agriculture, Forestry, Fisheries and Veterinary");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Agriculture, Forestry, Fisheries and Veterinary")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Agriculture, Forestry, Fisheries and Veterinary";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
// Plot.plot({
//   axis: null,
//   label: null,
//   height: 500,
//   marginTop: 30,
//   marginBottom: 50,
//   marginLeft: 180,
//   width: 1080,
//   grid: true,
//   title: "Graduates by Field (Arts and Humanities)",
//   subtitle: "Using most recent data available",
//   x: {label: "Female Graduates (%)"},
// //   fx: {label: "Country (Year)"},
//   marks: [
//     Plot.axisFy({lineWidth: 16, anchor: "left", dx: 0}),
//     Plot.waffleX({length: 1}, {x: 100, fillOpacity: 0.4, ry: "100%"}),
//     Plot.waffleX(grad_arts_and_humanities, {fy: "country_year", x: "indicator_value", ry: "100%", fill: "#C8057C", tip: true}),
//     Plot.text(grad_arts_and_humanities, {fy: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "left", lineAnchor: "bottom", dx: -60, dy: 30, fill: "black", fontSize: 24, fontWeight: "normal"})
//   ]
// })
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Arts and Humanities)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_arts_and_humanities, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_arts_and_humanities, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
// Plot.plot({
//   axis: null,
//   label: null,
//   height: 500,
//   marginTop: 30,
//   marginBottom: 50,
//   marginLeft: 180,
//   width: 1080,
//   grid: true,
//   title: "Graduates by Field (Agriculture, Forestry, Fisheries, and Veterinary)",
//   subtitle: "Using most recent data available",
//   x: {label: "Female Graduates (%)"},
// //   fx: {label: "Country (Year)"},
//   marks: [
//     Plot.axisFy({lineWidth: 16, anchor: "left", dx: 0}),
//     Plot.waffleX({length: 1}, {x: 100, fillOpacity: 0.4, ry: "100%"}),
//     Plot.waffleX(grad_agri, {fy: "country_year", x: "indicator_value", ry: "100%", fill: "#C8057C", tip: true}),
//     Plot.text(grad_agri, {fy: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "left", lineAnchor: "bottom", dx: -60, dy: 30, fill: "black", fontSize: 24, fontWeight: "normal"})
//   ]
// })
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Agriculture, Forestry, Fisheries, and Veterinary)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_agri, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_agri, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const grad_edu = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Education");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Education")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Education";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
// Plot.plot({
//   axis: null,
//   label: null,
//   height: 500,
//   marginTop: 30,
//   marginBottom: 50,
//   marginLeft: 180,
//   width: 1080,
//   grid: true,
//   title: "Graduates by Field (Education)",
//   subtitle: "Using most recent data available",
//   x: {label: "Female Graduates (%)"},
// //   fx: {label: "Country (Year)"},
//   marks: [
//     Plot.axisFy({lineWidth: 16, anchor: "left", dx: 0}),
//     Plot.waffleX({length: 1}, {x: 100, fillOpacity: 0.4, ry: "100%"}),
//     Plot.waffleX(grad_edu, {fy: "country_year", x: "indicator_value", ry: "100%", fill: "#C8057C", tip: true}),
//     Plot.text(grad_edu, {fy: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "left", lineAnchor: "bottom", dx: -60, dy: 30, fill: "black", fontSize: 24, fontWeight: "normal"})
//   ]
// })
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Education)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_edu, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_edu, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const grad_engg = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Engineering, manufacturing and construction");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Engineering, manufacturing and construction")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Engineering, manufacturing and construction";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
// Plot.plot({
//   axis: null,
//   label: null,
//   height: 500,
//   marginTop: 30,
//   marginBottom: 50,
//   marginLeft: 180,
//   width: 1080,
//   grid: true,
//   title: "Graduates by Field (Engineering, manufacturing and construction)",
//   subtitle: "Using most recent data available",
//   x: {label: "Female Graduates (%)"},
// //   fx: {label: "Country (Year)"},
//   marks: [
//     Plot.axisFy({lineWidth: 16, anchor: "left", dx: 0}),
//     Plot.waffleX({length: 1}, {x: 100, fillOpacity: 0.4, ry: "100%"}),
//     Plot.waffleX(grad_engg, {fy: "country_year", x: "indicator_value", ry: "100%", fill: "#C8057C", tip: true}),
//     Plot.text(grad_engg, {fy: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "left", lineAnchor: "bottom", dx: -60, dy: 30, fill: "black", fontSize: 24, fontWeight: "normal"})
//   ]
// })
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Engineering, manufacturing and construction)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_engg, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_engg, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const grad_health = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Health and welfare");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Health and welfare")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Health and welfare";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
// Plot.plot({
//   axis: null,
//   label: null,
//   height: 500,
//   marginTop: 30,
//   marginBottom: 50,
//   marginLeft: 180,
//   width: 1080,
//   grid: true,
//   title: "Graduates by Field (Health and welfare)",
//   subtitle: "Using most recent data available",
//   x: {label: "Female Graduates (%)"},
// //   fx: {label: "Country (Year)"},
//   marks: [
//     Plot.axisFy({lineWidth: 16, anchor: "left", dx: 0}),
//     Plot.waffleX({length: 1}, {x: 100, fillOpacity: 0.4, ry: "100%"}),
//     Plot.waffleX(grad_health, {fy: "country_year", x: "indicator_value", ry: "100%", fill: "#C8057C", tip: true}),
//     Plot.text(grad_health, {fy: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "left", lineAnchor: "bottom", dx: -60, dy: 30, fill: "black", fontSize: 24, fontWeight: "normal"})
//   ]
// })
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Health and welfare)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_health, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_health, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const grad_natsci = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Natural Sciences, Mathematics and Statistics");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Natural Sciences, Mathematics and Statistics")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Natural Sciences, Mathematics and Statistics";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Natural Sciences, Mathematics and Statistics)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_natsci, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_natsci, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const grad_services = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Services");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Services")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Services";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Services)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_services, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_services, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

```js
const grad_socsci = graduates_by_field.reduce((acc, current) => {
  const existingCountry = acc.find(item => item.country === current.country && item.sub_indicator_name === "Social Sciences, Journalism and Information");
  if (!existingCountry) return [...acc, current];
  if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.sub_indicator_name === "Social Sciences, Journalism and Information")), current];
  return [...acc];
}, [])
.sort((a, b) => a.country.localeCompare(b.country))
.map((row) => {
  const gradRow = row.sub_indicator_name === "Social Sciences, Journalism and Information";
  if (gradRow) {
    return {
      country_year: `${row.country} (${row.year})`,
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  } else {
    return null;
  }
})
.filter(row => row !== null);
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Graduates by Field (Social Sciences, Journalism and Information)",
  subtitle: "Using most recent data available",
  y: {label: "Female Graduates (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(grad_socsci, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(grad_socsci, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```
<br>

<div>
This dataset tracks the share of female graduates across fields of study in eight ASEAN countries, Brunei Darussalam, Laos, Malaysia, Myanmar, the Philippines, Thailand, Vietnam, and Singapore, between 1999 and 2019. Each entry reports the percentage of graduates who are women within a given discipline, covering areas such as ICT, engineering, natural sciences, health, education, agriculture, business, and the social sciences. While values are complete, most records lack remarks and subnational detail, with UNESCO Institute for Statistics serving as the primary source.
</div>
<br>
<div>
At the regional level, women make up an average of 53% of graduates across all fields, suggesting slight overall parity or female advantage. However, the range of values is wide. In some fields and years, women are nearly absent, with shares reported as low as 0%, while in others they dominate, reaching as high as 94%, especially in education and health-related fields. This underscores the uneven gender distribution across disciplines, with certain sectors attracting far more women than others.
</div>
<br>
<div>
The gender gaps follow clear patterns. Women are consistently the majority in education, health, and the humanities, while they remain underrepresented in STEM fields such as ICT, engineering, and natural sciences. For instance, in ICT and engineering, female graduates often fall well below parity, while in education women frequently make up two-thirds or more of graduates. This duality highlights the persistence of gendered specialization: women thrive in fields tied to care and teaching, while men continue to dominate in technical and industrial domains.

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.
</div>
<br>

<h2 id="indicators_graduates_in_ict">Share of Female Graduates in ICT Programs</h2>

<div class="card">
The percentage of female graduates in ICT-related programs at the tertiary education level.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_numerical_graduates_in_ict).
</div>

```js
const indicators_graduates_in_ict = FileAttachment("../data/indicators_numerical_graduates_in_ict.csv").csv({typed: true});
```

```js
const indicators_graduates_in_ict_filtered = indicators_graduates_in_ict.reduce((acc, current) => {
    const existingCountry = acc.find(item => item.country === current.country && item.indicator_id === current.indicator_id);
    if (!existingCountry) return [...acc, current];
    if (current.year > existingCountry.year) return [...acc.filter(item => !(item.country === current.country && item.indicator_id === current.indicator_id)), current];
    return [...acc];
}, [])
    .sort((a, b) => a.country.localeCompare(b.country))
    .map((row) => {
        return {
            country_year: `${row.country} (${row.year})`,
            indicator_name: row.indicator_name,
            indicator_value: row.indicator_value
        }
    });
```

```js
Plot.plot({
  axis: null,
  label: null,
  height: 500,
  marginTop: 30,
  marginBottom: 50,
  width: 1080,
  grid: true,
  title: "Percentage Women Graduates in ICT",
  subtitle: "Using most recent data available",
  y: {label: "Graduates in ICT (%)"},
//   fx: {label: "Country (Year)"},
  marks: [
    Plot.axisFx({lineWidth: 16, anchor: "bottom", dy: 20}),
    Plot.waffleY({length: 1}, {y: 100, fillOpacity: 0.4, rx: "100%"}),
    Plot.waffleY(indicators_graduates_in_ict_filtered, {fx: "country_year", y: "indicator_value", rx: "100%", fill: "#C8057C", tip: true}),
    Plot.text(indicators_graduates_in_ict_filtered, {fx: "country_year", text: (d) => (d.indicator_value / 100).toLocaleString("en-US", {style: "percent"}), frameAnchor: "bottom", lineAnchor: "top", dy: 6, fill: "black", fontSize: 24, fontWeight: "normal"})
  ]
})
```

<br>

<div>
This dataset tracks the share of female graduates in ICT programs across seven Southeast Asian countries, Brunei Darussalam, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, and Vietnam, between 1999 and 2018. Each entry records the percentage of ICT graduates who are women, providing a basis for comparing gender representation in technical education across time and place. While the dataset is complete in values, supporting metadata such as sources and subnational details are sparse, with most figures drawn from UNESCO.
</div>
<br>
<div>
At the regional level, women make up an average of 52% of ICT graduates, suggesting overall balance. Yet the range of values is strikingly wide: the lowest recorded share is 26% in Vietnam (1999), while the highest reaches 87% in Brunei Darussalam (2007). Malaysia shows relatively stable gender parity, with women accounting for 44-54% of ICT graduates, while the Philippines sits at 48%. Singapore, however, consistently underrepresents women at around 32-33%, and Indonesia shows similarly male-dominated enrollment at 35%.
</div>
<br>
<div>
These numbers reveal stark gender gaps within the region. In some contexts, women are the majority in ICT programs, as in Myanmar (67%) and parts of Brunei, while in others, especially Vietnam, Singapore, and Indonesia, they remain a clear minority. The dataset therefore highlights both progress and imbalance: the regional average suggests parity, but the underlying country-level data tells a more uneven story, with female participation in ICT ranging from strong leadership to significant underrepresentation.

Interested to see the trends per country? Check out our <a href="../country-reports/" target="_blank"><strong>Country reports</strong></a>.
</div>
<br>