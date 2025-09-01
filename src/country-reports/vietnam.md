---
theme: air
style: ../assets/css/diwa.css
---

# Viet Nam

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<div>

**Population (2023)**: 100,352,192
<br>
**Female Population (2023)**: 51,201,223
<br>
**% Female Population (2023)**: 51.02% 

</div>
<br>

## Key findings
<div>
Vietnam has reliable data on ICT participation, STEM graduates, and digital skills. The trends suggest stable but unequal representation, with women consistently below parity in ICT employment, leadership, and pay. Everyday skills are spreading rapidly, but technical competencies remain stagnant. Education data show that women dominate in arts, health, and agriculture but remain underrepresented in engineering and ICT.
<br><br>
These indicators carry important implications for ASEAN’s efforts to mainstream gender in ICT. Vietnam’s inclusion of digital literacy and pay equity highlights the dual challenge of equipping women with skills while also addressing structural inequalities in the workforce. For regional strategies, this underscores the need not only to expand access and training but also to ensure fairness in compensation and career progression. Vietnam’s focus provides a reminder that digital transformation must tackle both entry-level barriers and systemic disparities.
</div>
<br>

## Qualitative indicators
<div>
There are no reported comprehensive policies or initiatives in Vietnam that address the intersection of gender and ICT. The country does not have broad gender equality frameworks that serve as a foundation for reducing the digital gender divide, nor are there reported efforts to integrate gender considerations into ICT-specific strategies. Similarly, there are no reported mechanisms for gender budgeting or mainstreaming, and no specialized government bodies dedicated to gender and ICT. Programs aimed at supporting women in ICT through education, skills development, workplace equality, entrepreneurship support, or technology access have also not been reported. In addition, no initiatives exist for the systematic collection and analysis of gender-disaggregated ICT data, which limits the ability to assess and address disparities.
</div>
<br>

## Numerical indicators
<div>
Vietnam records indicators on gender gaps in internet access, women in the ICT workforce, and women graduates in STEM fields. It also includes figures for female graduates across multiple disciplines (arts, business, health, agriculture, natural sciences, and engineering) as well as measures of digital literacy and gender pay gaps in the ICT sector.

| **<span style="color: rgb(200, 5, 124);">INDICATOR</span>** | OBSERVATION |
| --- | --- |
| **<span style="color: rgb(200, 5, 124);">Gender Gap in Internet Access</span>** | In 2023, the gender gap in internet access was measured at 4.4. Since this is the only available data point, no trend can be established. |
| **<span style="color: rgb(200, 5, 124);">Percentage of Women in the ICT Workforce</span>** | In 2019, women represented 37.0% of the ICT workforce. Without additional years of information, no trend can be identified. |
| **<span style="color: rgb(200, 5, 124);">Percentage of Women in ICT Management Positions</span>** | N/A |
| **<span style="color: rgb(200, 5, 124);">Percentage of Women in ICT Leadership Roles</span>** | N/A |
| **<span style="color: rgb(200, 5, 124);">Gender Pay Gap in ICT Sector</span>** | In 2023, the gender pay gap in the ICT sector stood at 28.0. With only one year of data, no trajectory can be determined. |
| **<span style="color: rgb(200, 5, 124);">Percentage Women Graduates in STEM Fields</span>** | In 2023, women made up 36.5% of STEM graduates. No further data points are available to assess changes over time. |
| **<span style="color: rgb(200, 5, 124);">Enrolment and Completion Rates in ICT-Related Courses</span>** | N/A |
| **<span style="color: rgb(200, 5, 124);">Gender Representation in ICT Startups</span>** | N/A |
| **<span style="color: rgb(200, 5, 124);">Phone Ownership</span>** | N/A |
| **<span style="color: rgb(200, 5, 124);">Proportion of Youth and Adults with ICT Skills</span>** | N/A |
| **<span style="color: rgb(200, 5, 124);">Proportion of Youth and Adults with Digital Literacy Skills</span>** | In 2023, 36.0% of youth and adults demonstrated digital literacy skills. With only one year recorded, it is not possible to observe progression. This is the only ASEAN country with a record for this indicator. |
| **<span style="color: rgb(200, 5, 124);">Share of Female Graduates by Field</span>** | In 2019, women accounted for 53.0% of graduates in agriculture, 60.0% in arts and humanities, 59.5% in business, administration and law, and 37.1% in engineering. In health and welfare, women represented 58.7% of graduates, while in natural sciences they made up 50.6%. For ICT programs, female participation was lower, at 26.4% in 2019. All these are single-year figures, so no historical trend can be determined. |
| **<span style="color: rgb(200, 5, 124);">Share of Female Graduates in ICT Programs</span>** | In 2016, women accounted for 26.4% of graduates in ICT programs. As only one year is reported, no trend over time is available. |
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
const indicators_gender_gap_internet_access_filtered = indicators_gender_gap_internet_access.filter(row => row.country === 'Vietnam')
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
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.filter(row => row.country === 'Vietnam')
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
const indicators_gender_paygap_in_ict = FileAttachment("../data/indicators_numerical_gender_paygap_in_ict.csv").csv({typed: true});
```

```js
const indicators_gender_paygap_in_ict_filtered = indicators_gender_paygap_in_ict.filter(row => row.country === 'Vietnam')
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
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Vietnam')
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
Plot.plot({
    marks: [
        Plot.frame(),
        Plot.text(["No data"])
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
const graduates_by_field_filtered = graduates_by_field.filter(row => row.country === 'Vietnam')
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
const graduates_in_ict_filtered = graduates_in_ict.filter(row => row.country === 'Vietnam')
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