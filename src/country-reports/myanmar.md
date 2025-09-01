---
theme: air
style: ../assets/css/diwa.css
---

# Myanmar

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<div>

**Population (2023)**: 54,133,798
<br>
**Female Population (2023)**: 27,177,563
<br>
**% Female Population (2023)**: 50.20%

</div>
<br>

## Key findings
<div>
Myanmar's digital gender landscape is largely opaque due to a near-complete absence of both qualitative policy information and robust quantitative data. The available data, though extremely limited, indicates that while women have achieved high representation in STEM and ICT graduation rates, this educational success does not appear to translate into the workforce, where their participation in technical roles like telecommunications is significantly lower. This suggests a critical disconnect between education and employment pathways. The complete lack of reported policies, programs, or initiatives focused on gender and ICT means there is no visible strategy to address this or other disparities, such as the significant gaps in internet access and phone ownership.
<br><br>
For ASEAN’s gender and ICT mainstreaming agenda, Myanmar represents a case of a critical data and policy vacuum. The scarcity of reliable, consistently collected data makes it impossible to formulate, monitor, or evaluate any evidence-based policies. Key indicators on workforce participation, leadership, and pay gap are either missing or fragmented. Without foundational data collection and a strategic policy framework, Myanmar is not positioned to address the digital gender divide, hindering its ability to participate fully in an inclusive regional digital economy.

</div>
<br>

## Categorical indicators
<div>
There are no reported comprehensive policies or initiatives in Myanmar that address the intersection of gender and ICT. The country does not have broad gender equality frameworks that serve as a foundation for reducing the digital gender divide, nor are there reported efforts to integrate gender considerations into ICT-specific strategies. Similarly, there are no reported mechanisms for gender budgeting or mainstreaming, and no specialized government bodies dedicated to gender and ICT. Programs aimed at supporting women in ICT through education, skills development, workplace equality, entrepreneurship support, or technology access have also not been reported. In addition, no initiatives exist for the systematic collection and analysis of gender-disaggregated ICT data, which limits the ability to assess and address disparities.
</div>
<br>

## Numerical indicators
<div>
The quantitative data for Myanmar is exceptionally limited and fragmented, with most indicators relying on single data points from different years. Critical information on ICT skills, the gender pay gap, and women in leadership roles is unavailable. The existing data on education and basic access provides a very narrow snapshot but is insufficient for any meaningful trend analysis; highlighting a severe data deficit that hinders a comprehensive understanding of the country’s digital gender landscape.

| **<span style="color: rgb(200, 5, 124);">INDICATOR</span>** | OBSERVATION |
| --- | --- |
| <span style="color: rgb(200, 5, 124);">**Gender Gap in Internet Access**</span> | A single data point from 2017 shows a significant gender gap in internet access of 10. |
| <span style="color: rgb(200, 5, 124);">**Percentage of Women in the ICT Workforce**</span> | Data from 2019 is disaggregated by sub-sector, showing women made up 46% of the workforce in Computer Programming and Consultancy but only 29% in Telecommunications. A single data point from 2017 reported that women constituted 71% of the workforce in Engineering and Tech. |
| <span style="color: rgb(200, 5, 124);">**Percentage of Women in ICT Management Positions**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Percentage of Women in ICT Leadership Roles**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Gender Pay Gap in ICT Sector**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Percentage Women Graduates in STEM Fields**</span> | A single data point from 2018 shows that women constituted a majority of STEM graduates at 60.8%. |
| <span style="color: rgb(200, 5, 124);">**Enrolment and Completion Rates in ICT-Related Courses**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Gender Representation in ICT Startups**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Phone Ownership**</span> | The available data shows a widening gender gap in phone ownership. In 2016, the gap was minimal, with 77% of women and 78% of men owning a phone. By 2020, the gap had grown to 11 percentage points, with ownership at 57% for women and 68% for men. |
| <span style="color: rgb(200, 5, 124);">**Proportion of Youth and Adults with ICT Skills**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Share of Female Graduates by Field**</span> | Data from 2011 and 2018 shows that women consistently formed a majority of graduates in most fields. However, there were significant declines between the two years in key areas. The female share in Engineering, Manufacturing and Construction dropped sharply from 61.2% to 42.3%, and in Health and Welfare from 80.6% to 57.2%. In contrast, their share in Services rose from 36.3% to 51.8%. |
| <span style="color: rgb(200, 5, 124);">**Share of Female Graduates in ICT Programs**</span> | A single data point from 2018 indicates that women made up a strong majority of ICT graduates at 67%. |

</div>
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
const indicators_gender_gap_internet_access_filtered = indicators_gender_gap_internet_access.filter(row => row.country === 'Myanmar')
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
const indicators_women_in_ict_workforce = FileAttachment("../data/indicators_numerical_women_in_ict_workforce.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.filter(row => row.country === 'Myanmar')
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

<br>

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
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Myanmar')
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
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
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
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.filter(row => row.country === 'Myanmar')
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
const graduates_by_field = FileAttachment("../data/indicators_numerical_graduates_by_field.csv").csv({typed: true});
```

```js
const graduates_by_field_filtered = graduates_by_field.filter(row => row.country === 'Myanmar')
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

<div class="card">
The percentage of female graduates in ICT-related programs at the tertiary education level.
</div>

```js
const graduates_in_ict = FileAttachment("../data/indicators_numerical_graduates_in_ict.csv").csv({typed: true});
```

```js
const graduates_in_ict_filtered = graduates_in_ict.filter(row => row.country === 'Myanmar')
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
    x: {interval: Plot.timeInterval("1 year")},
    marks: [
        Plot.barY(
            graduates_in_ict_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Female Graduates in ICT Programs (%)"}),
    ]
})
```

<br>

**Read more in our <a href="../assets/files/SmartCT-ASEAN-DIWA-Policy-Paper.pdf" download target="_blank"><strong>policy paper</strong></a>**.