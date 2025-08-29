---
theme: air
style: ../assets/css/diwa.css
---

# Thailand

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>

## Key findings

Thailand has achieved widespread access to ICT but continues to see men with a slight advantage in internet use. Women form about one-third of STEM graduates and ICT workforce members, suggesting underrepresentation but steady participation. Phone ownership is nearly equal across genders. Education data confirm women’s concentration in health, education, and social sciences, with lower presence in engineering and natural sciences.

<br>

## Qualitative Indicators

| **Indicator** | Description |
| --- | --- |
| **Gender Equality Policies** | The _Gender Equality Act (2015)_ established two committees to investigate and prevent discrimination. Unlike Singapore, which depends on workplace guidelines, Thailand enshrines equality in law. |
| **Workplace Equality Policies** | Non-discrimination is handled through the _Gender Equality Act_ rather than through sectoral guidelines. |
| **Gender and ICT Policies** | Thailand lacks a broad integration policy, but _Girls in ICT Day (2017)_ serves as the recurring national platform to highlight women’s participation in digital fields. |
| **Education and Development Initiatives** | _Girls in ICT Day_ doubles as Thailand’s education-focused activity, covering themes such as cybersecurity, smart farming, and AI. |
| **Entrepreneurship Programs** | The _Womenpreneur: Tech & Sustainability Programme (2023)_ engaged over 150 women entrepreneurs. While not permanent, the spreadsheet notes it fills the role of a dedicated ICT entrepreneurship program and is scheduled again in 2025. |
| **Gender Budgeting** | Thailand launched its first _Gender Budgeting Action Plan_ in 2020. While broad in scope, it mainstreams gender considerations into national budgeting, indirectly benefiting ICT. |
| **Specialized Government Bodies** | Committees under the _Gender Equality Act_ provide institutional mechanisms for equality, addressing ICT indirectly. |
| **Technology Access & Inclusion** | _SchoolNet (1995)_ extended internet access to all schools, creating a foundation for nationwide digital literacy, though not specifically gender-targeted. |
| **Data Collection and Analysis** | Gender-disaggregated data on STEM and ICT participation are present, indicating consistent national monitoring.

<br>

## Women in ICT Workforce
```js
const indicators_women_in_ict_workforce = FileAttachment("../data/indicators_numerical_women_in_ict_workforce.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.filter(row => row.country === 'Thailand')
  .map((row) => {
    return { 
      year: (new Date(parseInt(row.year), 0, 1)), 
      indicator_value: parseFloat(row.indicator_value)
    }
  })
```
<!-- 
```js
Plot.plot({
    marks: [
        Plot.rectY(
            indicators_women_in_ict_workforce_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C", interval: Plot.timeInterval("1 year")}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women in ICT Workforce (%)"})
    ]
})
``` -->

```js
Plot.plot({
    x: {interval: Plot.timeInterval("1 year")},
    marks: [
        Plot.barY(
            indicators_women_in_ict_workforce_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women in ICT Workforce (%)"}),
    ]
})
```

<br>

## Women in ICT Management Positions
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Women in ICT Leadership Roles
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Gender Pay Gap in ICT Sector
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Women Graduates in STEM Fields
```js
const indicators_women_graduates_in_stem = FileAttachment("../data/indicators_numerical_women_graduates_in_stem.csv").csv({typed: true});
```

```js
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Thailand')
  .map((row) => {
    return { 
      year: (new Date(parseInt(row.year), 0, 1)), 
      indicator_value: parseFloat(row.indicator_value)
    }
  })
```

```js
Plot.plot({
    x: {interval: Plot.timeInterval("1 year")},
    marks: [
        Plot.barY(
            indicators_women_graduates_in_stem_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women Graduates in STEM Fields (%)"}),
    ]
})
```

<br>

## Enrolment Rates in ICT-Related Courses
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Completion Rates in ICT-Related Courses
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Phone ownership
```js
const indicators_gender_phone_ownership = FileAttachment("../data/indicators_numerical_gender_phone_ownership.csv").csv({typed: true});
```

```js
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.filter(row => row.country === 'Thailand')
  .map((row) => {
    return { 
      year: (new Date(parseInt(row.year), 0, 1)),
      indicator_name: row.indicator_name, 
      indicator_value: parseFloat(row.indicator_value)
    }
  })
```

```js
Plot.plot({
    color: {range: ["#C8057C", "#4CB391"], legend: true},
    x: {axis: null, label: null},
    y: {tickFormat: "s", grid: true},
    fx: {interval: Plot.timeInterval("1 year"), label: null},
    marks: [
        Plot.barY(
          indicators_gender_phone_ownership_filtered, {
            x: "indicator_name",
            y: "indicator_value",
            fill: "indicator_name",
            fx: "year",
            // sort: {x: null, color: null, fx: {value: "-y", reduce: "sum"}},
            tip: true,
            r: 16
          }
        ),
        // Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Phone ownership (%)"}),
    ]
})
```

<br>

## Proportion of Youth and Adults with ICT Skills
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Share of Female Graduates by Field
```js
const graduates_by_field = FileAttachment("../data/indicators_numerical_graduates_by_field.csv").csv({typed: true});
```

```js
const graduates_by_field_filtered = graduates_by_field.filter(row => row.country === 'Thailand')
  .map((row) => {
    return { 
      year: (new Date(parseInt(row.year), 0, 1)),
      indicator_name: row.indicator_name,
      sub_indicator_name: row.sub_indicator_name,
      indicator_value: parseFloat(row.indicator_value)
    }
  })
```

```js
Plot.plot({
    // color: {range: ["#C8057C", "#4CB391"], legend: true},
    color: {legend: true},
    x: {axis: null, label: null},
    y: {tickFormat: "s", grid: true},
    fx: {interval: Plot.timeInterval("1 year"), label: null},
    marks: [
        Plot.barY(
          graduates_by_field_filtered, {
            x: "sub_indicator_name",
            y: "indicator_value",
            fill: "sub_indicator_name",
            fx: "year",
            // sort: {x: null, color: null, fx: {value: "-y", reduce: "sum"}},
            tip: true,
            r: 16
          }
        ),
        // Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Youth and Adults with ICT Skills (%)"}),
    ]
})
```

<br>

## Share of Female Graduates in ICT Programs
```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

**Read more in our <a href="../assets/files/SmartCT-ASEAN-DIWA-Policy-Paper.pdf" download target="_blank"><strong>policy paper</strong></a>**.