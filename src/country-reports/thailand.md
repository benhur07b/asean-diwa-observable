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

The implications for mainstreaming gender and ICT are clear: Thailand’s figures can guide policies that link educational outcomes to labor market opportunities in digital industries. By tracking women’s graduation patterns across diverse fields, it becomes possible to identify sectors where underrepresentation persists and create initiatives that bridge those gaps. For ASEAN, Thailand’s approach illustrates the importance of aligning education systems with ICT-focused gender policies to ensure women’s equitable participation in the digital economy.

<br>

## Qualitative indicators

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

## Numerical indicators

Thailand records gender gaps in internet access across multiple years, phone ownership by gender, the percentage of women in the ICT workforce, and women graduates in STEM. It also captures the distribution of female graduates across fields such as arts and humanities, natural sciences, education, and agriculture.

| **Indicator** | Observation |
| --- | --- |
| **Gender Gap in Internet Access** | From 2013 to 2024, the gender gap in internet access ranged between -0.23 and 2.58. It began at -0.23 in 2013, suggesting women had slightly greater access, and ended at 2.0 in 2024, showing that men gained an advantage over time. The trend increased overall. |
| **Percentage of Women in the ICT Workforce** | In 2020, women represented 35.3% of the ICT workforce. Since this is the only year of data available, no time trend can be determined. |
| **Percentage of Women in ICT Management or Leadership** | N/A |
| **Gender Pay Gap in ICT Sector** | N/A |
| **Percentage Women Graduates in STEM Fields** | Between 2015 and 2016, women’s share of STEM graduates rose slightly, ranging from 29.7% to 30.1%. It started at 29.7% in 2015 and ended at 30.1% in 2016. The trend increased overall, though the rise was small. |
| **Enrolment and Completion Rates in ICT-Related Courses** | N/A |
| **Gender Representation in ICT Startups** | N/A |
| **Phone Ownership** | From 2022 to 2024, mobile phone ownership was consistently high for both genders. Female ownership ranged between 88.0% and 88.8%, rising slightly from 88.0% in 2022 to 88.8% in 2024. Male ownership followed a similar pattern, ranging between 88.5% and 89.2%, and increasing from 88.5% in 2022 to 89.2% in 2024. Both showed modest upward trends. |
| **Proportion of Youth and Adults with ICT Skills** | N/A |
| **Proportion of Youth and Adults with Digital Literacy Skills** | N/A |
| **Share of Female Graduates by Field** | Data shows women were the majority in education, health, and the sciences, but remained a small minority in engineering and STEM. _Women made up the majority of graduates across most fields in both 2015 and 2016, though their representation varied by discipline. They were especially dominant in health and welfare, accounting for about 77% in both years, and in education, where their share rose from 69.8% in 2015 to 71.7% in 2016. Women were also well represented in the arts and humanities (63.4% to 65.2%), social sciences, journalism and information (59.8% to 62.2%), and natural sciences, mathematics and statistics (68.1% to 70.7%). In agriculture, forestry, fisheries and veterinary, they held just over half of graduates, moving from 51.0% to 52.0%. By contrast, in engineering, manufacturing and construction, women made up only a small minority, rising slightly from 15.1% in 2015 to 16.8% in 2016, while in the broader STEM grouping their share hovered around 30%. In services, women’s representation was high in 2015 at 72.2%, but dropped to 60.6% in 2016. Finally, in unspecified fields, women’s share rose from 55.2% to 62.5%. Overall, the figures show a consistent gendered pattern: women dominated education, health, and the social sciences, while men remained the majority in engineering and technical fields._
| **Share of Female Graduates in ICT Programs** | N/A

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