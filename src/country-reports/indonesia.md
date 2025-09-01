---
theme: air
style: ../assets/css/diwa.css
---

# Indonesia

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<div>

**Population (2023)**: 281,190,067
<br>
**Female Population (2023)**: 39,934,300
<br>
**% Female Population (2023)**: 49.77%

</div>
<br>

## Key findings
<div>
Indonesia’s digital gender landscape is defined by a stark disconnect between available data and policy action. The quantitative indicators, though limited, consistently point to significant gender disparities: women trail men in internet access and phone ownership, are severely underrepresented in the ICT workforce and leadership roles, and face a substantial pay gap. Despite this clear evidence of inequality, there is a complete absence of reported qualitative initiatives: no specific policies, skill development programs, or gender-mainstreaming frameworks to address these gaps have been documented.
<br><br>
This lack of policies is a major concern for ASEAN’s agenda on gender and ICT mainstreaming. While the data is sparse, with many indicators relying on single data points, it is sufficient to confirm that a digital gender divide exists and, in some areas, is closing very slowly. The lack of any reported targeted interventions suggests that gender equity is not being prioritized within Indonesia's national digital transformation strategy. Without a formal policy framework, progress is likely to be incidental rather than intentional, hindering the country's ability to achieve an inclusive and equitable digital economy.

</div>
<br>

## Categorical indicators
<div>
There are no reported comprehensive policies or initiatives in Indonesia that address the intersection of gender and ICT. The country does not have broad gender equality frameworks that serve as a foundation for reducing the digital gender divide, nor are there reported efforts to integrate gender considerations into ICT-specific strategies. Similarly, there are no reported mechanisms for gender budgeting or mainstreaming, and no specialized government bodies dedicated to gender and ICT. Programs aimed at supporting women in ICT through education, skills development, workplace equality, entrepreneurship support, or technology access have also not been reported. In addition, no initiatives exist for the systematic collection and analysis of gender-disaggregated ICT data, which limits the ability to assess and address disparities.
</div>
<br>

## Numerical indicators
<div>
The quantitative data for Indonesia is sparse and heavily skewed toward access and workforce metrics, with many indicators based on only a single year of data. This makes trend analysis impossible for critical areas like the gender pay gap, women in ICT leadership, and STEM graduation rates. Furthermore, there is a complete lack of data on educational enrolment and completion in ICT programs. This data gap limits a full understanding of the pipeline for women in ICT and the structural barriers they may face.
</div>

| **<span style="color: rgb(200, 5, 124);">INDICATOR</span>** | OBSERVATION |
| --- | --- |
| <span style="color: rgb(200, 5, 124);">**Gender Gap in Internet Access**</span> | Between 2015 and 2023, the gender gap in internet access showed a consistent narrowing trend. It started at 8.18 in 2015 and decreased to 4.2 in 2023, indicating steady progress in closing the access divide between men and women. |
| <span style="color: rgb(200, 5, 124);">**Percentage of Women in the ICT Workforce**</span> | A single data point from 2020 shows that women made up 28% of the ICT workforce. |
| <span style="color: rgb(200, 5, 124);">**Percentage of Women in ICT Management Positions**</span> | A single data point from 2017 reports that women held 23% of ICT management positions. |
| <span style="color: rgb(200, 5, 124);">**Percentage of Women in ICT Leadership Roles**</span> | A single data point from 2017 indicates that women occupied 23% of ICT leadership roles. |
| <span style="color: rgb(200, 5, 124);">**Gender Pay Gap in ICT Sector**</span> | A single data point for 2023 shows a gender pay gap of 18% in the ICT sector. |
| <span style="color: rgb(200, 5, 124);">**Percentage Women Graduates in STEM Fields**</span> | A single data point from 2020 indicates that women accounted for 32% of STEM graduates. |
| <span style="color: rgb(200, 5, 124);">**Enrolment and Completion Rates in ICT-Related Courses**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Gender Representation in ICT Startups**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Phone Ownership**</span> | From 2015 to 2023, phone ownership increased for both genders, though a persistent gap remains. Female ownership grew from 50.4% to 62.6%, while male ownership rose from 63.4% to 71.9%. The gap between male and female ownership was approximately 13 percentage points in 2015 and remained around 9 percentage points in 2023. |
| <span style="color: rgb(200, 5, 124);">**Proportion of Youth and Adults with ICT Skills**</span> | Data from 2017 shows a wide disparity in digital skills. While basic copy-paste and file transfer skills were reported by 59.6% and 50.7% of the population, respectively, more advanced skills were rare. Only 3.5% reported the ability to write a computer program. |
| <span style="color: rgb(200, 5, 124);">**Proportion of Youth and Adults with Digital Literacy Skills**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Share of Female Graduates by Field**</span> | N/A |
| <span style="color: rgb(200, 5, 124);">**Share of Female Graduates in ICT Programs**</span> | N/A
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
const indicators_gender_gap_internet_access_filtered = indicators_gender_gap_internet_access.filter(row => row.country === 'Indonesia')
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
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.filter(row => row.country === 'Indonesia')
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
const indicators_women_in_ict_management = FileAttachment("../data/indicators_numerical_women_in_ict_management.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_management_filtered = indicators_women_in_ict_management.filter(row => row.country === 'Indonesia')
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

<div class="card">
The proportion of women in high-level leadership positions (e.g., C-suite or board roles) within ICT organizations.
</div>

```js
const indicators_women_in_ict_leadership = FileAttachment("../data/indicators_numerical_women_in_ict_leadership.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_leadership_filtered = indicators_women_in_ict_leadership.filter(row => row.country === 'Indonesia')
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
            indicators_women_in_ict_leadership_filtered, 
            {x: "year", y: "indicator_value", r: 16, fill: "#C8057C",  tip: true}),
        Plot.axisX({label: "Year"}),
        Plot.axisY({label: "Women in ICT Leadership Roles (%)"}),
    ]
})
```

<br>

## Gender Pay Gap in ICT Sector

<div class="card">
The difference in average earnings between men and women in the ICT sector, typically expressed as a percentage of men’s earnings (e.g., women earn 18-30% less than men).
</div>

```js
const indicators_gender_paygap_in_ict = FileAttachment("../data/indicators_numerical_gender_paygap_in_ict.csv").csv({typed: true});
```

```js
const indicators_gender_paygap_in_ict_filtered = indicators_gender_paygap_in_ict.filter(row => row.country === 'Indonesia')
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

<div class="card">
The proportion of women among all graduates in science, technology, engineering, and mathematics (STEM) fields, expressed as a percentage.
</div>

```js
const indicators_women_graduates_in_stem = FileAttachment("../data/indicators_numerical_women_graduates_in_stem.csv").csv({typed: true});
```

```js
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Indonesia')
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
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.filter(row => row.country === 'Indonesia')
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
const indicators_ict_skills = FileAttachment("../data/indicators_numerical_ict_skills.csv").csv({typed: true});
```

```js
const indicators_ict_skills_filtered = indicators_ict_skills.filter(row => row.country === 'Indonesia')
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
const graduates_in_ict = FileAttachment("../data/indicators_numerical_graduates_in_ict.csv").csv({typed: true});
```

```js
const graduates_in_ict_filtered = graduates_in_ict.filter(row => row.country === 'Indonesia')
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