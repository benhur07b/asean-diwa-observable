---
theme: air
style: ../assets/css/diwa.css
---

# Singapore

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>

## Key findings

Singapore stands out for the scale of women’s participation in ICT: they form the majority of the workforce and almost two-fifths of management roles. Access gaps in internet use have largely closed, and mobile phone ownership is nearly universal. At the same time, disparities remain in higher education and advanced digital competencies. Women are still underrepresented in STEM and ICT programs, despite high participation in health, education, and social sciences.

<br>

## Qualitative Indicators

| **Indicator** | Description |
| --- | --- |
| **Gender Equality Policies** | Singapore does not legislate equality through a broad act. Instead, it relies on the Tripartite Guidelines on Fair Employment Practices (2007), a framework that discourages discriminatory hiring and advancement. While narrower than a statute, these guidelines have become the country’s functional substitute for a comprehensive equality law. |
| **Workplace Equality Policies** | The Tripartite Guidelines also serve at the organizational level, promoting fair, merit-based workplaces across industries, including ICT. |
| **Gender and ICT Policies** | The Singapore Women in Tech (SGWiT) initiative (2021) is the flagship program, promoting mentorship, coding workshops, and corporate pledges to strengthen women’s presence in ICT. |
| **Education and Development Initiatives** | SGWiT doubles as the country’s main vehicle for education-focused programs, designed to encourage women to pursue ICT careers. |
| **Entrepreneurship Programs** | Startup SG (2017) is not tailored specifically to women, but the spreadsheet records its measurable impact: women-owned businesses grew significantly during its operation, making it an indirect yet effective support for women entrepreneurs. |
| **Gender Budgeting** | Singapore does not practice gender budgeting, preferring instead to embed inclusivity within its broader innovation and growth policies. |
| **Specialized Government Bodies** | No dedicated genderICT body exists; partnerships like SGWiT stand in place of statutory institutions. |
| **Data Collection and Analysis** | The country’s commitment to measurement is clear: the spreadsheet lists over 20 categories of ICT skills disaggregated by gender, providing a granular portrait of digital inclusion. |

<br>

---
theme: air
style: ../assets/css/diwa.css
---

# Singapore

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

## Women in ICT Workforce
```js
const indicators_women_in_ict_workforce = FileAttachment("../data/indicators_numerical_women_in_ict_workforce.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.filter(row => row.country === 'Singapore')
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
const indicators_women_in_ict_management = FileAttachment("../data/indicators_numerical_women_in_ict_management.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_management_filtered = indicators_women_in_ict_management.filter(row => row.country === 'Singapore')
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
            indicators_women_in_ict_management_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women in ICT Management Positions (%)"}),
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
const indicators_gender_paygap_in_ict = FileAttachment("../data/indicators_numerical_gender_paygap_in_ict.csv").csv({typed: true});
```

```js
const indicators_gender_paygap_in_ict_filtered = indicators_gender_paygap_in_ict.filter(row => row.country === 'Singapore')
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
            indicators_gender_paygap_in_ict_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Gender Pay Gap in ICT Sector (%)"}),
    ]
})
```

<br>

## Women Graduates in STEM Fields
```js
const indicators_women_graduates_in_stem = FileAttachment("../data/indicators_numerical_women_graduates_in_stem.csv").csv({typed: true});
```

```js
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Singapore')
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
const indicators_enrolment_rates_in_ict = FileAttachment("../data/indicators_numerical_enrolment_rates_in_ict.csv").csv({typed: true});
```

```js
const indicators_enrolment_rates_in_ict_filtered = indicators_enrolment_rates_in_ict.filter(row => row.country === 'Singapore' && row.indicator_id === 'NUM-00007-F')
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
```js
const indicators_completion_rates_in_ict = FileAttachment("../data/indicators_numerical_completion_rates_in_ict.csv").csv({typed: true});
```

```js
const indicators_completion_rates_in_ict_filtered = indicators_completion_rates_in_ict.filter(row => row.country === 'Singapore'  && row.indicator_id === 'NUM-00008-F')
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
            indicators_completion_rates_in_ict_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women Enrolment Rates in ICT-Related Courses (%)"}),
    ]
})
```

<br>

## Phone ownership
```js
const indicators_gender_phone_ownership = FileAttachment("../data/indicators_numerical_gender_phone_ownership.csv").csv({typed: true});
```

```js
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.filter(row => row.country === 'Singapore')
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
const indicators_ict_skills = FileAttachment("../data/indicators_numerical_ict_skills.csv").csv({typed: true});
```

```js
const indicators_ict_skills_filtered = indicators_ict_skills.filter(row => row.country === 'Singapore')
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
          indicators_ict_skills_filtered, {
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

## Share of Female Graduates by Field
```js
const graduates_by_field = FileAttachment("../data/indicators_numerical_graduates_by_field.csv").csv({typed: true});
```

```js
const graduates_by_field_filtered = graduates_by_field.filter(row => row.country === 'Singapore')
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
const graduates_in_ict = FileAttachment("../data/indicators_numerical_graduates_in_ict.csv").csv({typed: true});
```

```js
const graduates_in_ict_filtered = graduates_in_ict.filter(row => row.country === 'Singapore')
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