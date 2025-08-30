---
theme: air
style: ../assets/css/diwa.css
---

# Cambodia

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>

## Key findings

<br>

## Categorical indicators

<br>

## Gender Gap in Internet Access

<div class="card">
The difference between the percentage of women and the percentage of men who use the internet within a given population. 

A positive value indicates women generally have more access while a negative value indicates they generally have less.
</div>

```js
const indicators_gender_gap_internet_access = FileAttachment("../data/indicators_numerical_gender_gap_internet_access.csv").csv({typed: true});
```

```js
const indicators_gender_gap_internet_access_filtered = indicators_gender_gap_internet_access.filter(row => row.country === 'Cambodia')
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
            indicators_gender_gap_internet_access_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Gender Gap in Internet Access (%)"}),
    ]
})
```

<br>

## Women in ICT Workforce

<div class="card">
The proportion of women among all individuals employed in ICT-related occupations or the ICT sector, expressed as a percentage.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Women in ICT Management Positions

<div class="card">
The proportion of women occupying managerial or leadership roles within the ICT sector, expressed as a percentage.
</div>

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

<div class="card">
The proportion of women in high-level leadership positions (e.g., C-suite or board roles) within ICT organizations.
</div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

## Gender Pay Gap in ICT Sector

<div class="card">
The difference in average earnings between men and women in the ICT sector, typically expressed as a percentage of men’s earnings (e.g., women earn 18-30% less than men).
</div>

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

<div class="card">
The proportion of women among all graduates in science, technology, engineering, and mathematics (STEM) fields, expressed as a percentage.
</div>

```js
const indicators_women_graduates_in_stem = FileAttachment("../data/indicators_numerical_women_graduates_in_stem.csv").csv({typed: true});
```

```js
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Cambodia')
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

<div class="card">
The percentage of female students enrolled in educational programs related to ICT, such as computer science or telecommunications.
</div>

```js
const indicators_enrolment_rates_in_ict = FileAttachment("../data/indicators_numerical_enrolment_rates_in_ict.csv").csv({typed: true});
```

```js
const indicators_enrolment_rates_in_ict_filtered = indicators_enrolment_rates_in_ict.filter(row => row.country === 'Cambodia')
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
            indicators_enrolment_rates_in_ict_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women Enrolment Rates in ICT-Related Courses (%)"}),
    ]
})
```

<br>

## Completion Rates in ICT-Related Courses

<div class="card">
 The percentage of male/female students who successfully complete ICT-related educational programs.
</div>

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

<div class="card">
The percentage of individuals who own a mobile telephone, disaggregated by gender.
</div>

```js
const indicators_gender_phone_ownership = FileAttachment("../data/indicators_numerical_gender_phone_ownership.csv").csv({typed: true});
```

```js
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.filter(row => row.country === 'Cambodia')
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

<div class="card">
The percentage of youth (aged 15-24) and adults (aged 15+) who have specific ICT skills, categorized by skill type. Disaggregated if possible.
 </div>

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

<div class="card">
World Bank indicator measures the percentage of female graduates across different fields of study in tertiary education.
 </div>

```js
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
    ]
})
```

<br>

## Share of Female Graduates in ICT Programs

<div class="card">
The percentage of female graduates in ICT-related programs at the tertiary education level.
</div>

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