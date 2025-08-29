---
theme: air
style: ../assets/css/diwa.css
---

# Philippines

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>

## Key findings

Women in the Philippines benefit from widespread digital access and high mobile phone penetration, yet their presence in technical education and ICT professions remains below parity. Digital skills are broadly distributed at the basic level, but advanced capacities such as coding remain uncommon. Education data show strong female participation in fields such as education and health, while underrepresentation persists in engineering, ICT, and some sciences.

For ASEAN’s gender and ICT mainstreaming agenda, these figures highlight both opportunities and challenges. Disaggregated measures allow for targeted interventions to reduce barriers for women in digital access and skills training. At the same time, they show where systemic improvements are needed, such as building pathways from STEM education into ICT employment. In this sense, the Philippines offers a case for strengthening capacity-building programs and inclusive workforce development, reinforcing ASEAN’s broader vision of equitable digital transformation.

<br>

## Categorical indicators

There are no reported comprehensive policies or initiatives in the Philippines that address the intersection of gender and ICT. The country does not have broad gender equality frameworks that serve as a foundation for reducing the digital gender divide, nor are there reported efforts to integrate gender considerations into ICT-specific strategies. Similarly, there are no reported mechanisms for gender budgeting or mainstreaming, and no specialized government bodies dedicated to gender and ICT. Programs aimed at supporting women in ICT through education, skills development, workplace equality, entrepreneurship support, or technology access have also not been reported. In addition, no initiatives exist for the systematic collection and analysis of gender-disaggregated ICT data, which limits the ability to assess and address disparities.

<br>

## Numerical indicators

The Philippines records gender gaps in internet access, phone ownership by gender, women’s participation in the ICT workforce, and women graduates in STEM fields. It also documents the distribution of female graduates across academic disciplines and a detailed set of ICT skills, such as sending emails with attachments, transferring files between devices, installing software, preparing presentations, and applying spreadsheet functions.

| **Indicator** | Observation |
| --- | --- |
| **Gender Gap in Internet Access** | Data is only available for 2022, when the gender gap in internet access was recorded at -2.12. With no earlier or later figures, it is not possible to establish a trend over time. |
| **Percentage of Women in the ICT Workforce** | In 2019, women represented 32.0% of the ICT workforce. Since this is the only available data point, no conclusions can be drawn about whether participation has been rising or falling across years. |
| **Percentage of Women in ICT Management Positions** | N/A |
| **Percentage of Women in ICT Leadership Roles** | N/A |
| **Gender Pay Gap in ICT Sector** | N/A |
| **Percentage Women Graduates in STEM Field** | The Philippines reported that in 2017, 36.3% of graduates in STEM fields were women. Without additional years of data, it is not possible to identify a trend. |
| **Enrolment and Completion Rates in ICT-Related Courses** | N/A |
| **Gender Representation in ICT Startups** | N/A |
| **Phone Ownership** | By 2020, mobile phone ownership in the Philippines was widespread, with 81.0% of women and 77.0% of men reporting ownership. As this dataset is limited to one year, no trend over time can be identified. |
| **Proportion of Youth and Adults with ICT Skills** | Data from 2019 shows that ICT skills among youth and adults in the Philippines varied significantly across tasks. About 7.2% reported being able to use basic spreadsheet formulas, while 24.5% could perform copy-paste tasks and 25.8% could send emails with attachments. Higher percentages were seen in file transfer skills (22.2%) and installing or configuring software (10.5%). Meanwhile, only 9.1% could create electronic presentations. Since this is based on one year, no trajectory can be determined. |
| **Proportion of Youth and Adults with Digital Literacy Skills** | N/A |
| **Share of Female Graduates by Field** | Data shows women were more represented in arts and social sciences than in engineering and ICT. _Between 2003 and 2017, women remained strongly represented in traditionally female-dominated fields, while their share declined in others. In education, the female share was 77.2% in 2003 and slightly declined to 76.7% in 2017, staying consistently high. Similarly, health and welfare fields showed strong female participation, falling from 75.5% in 2003 to 71.9% in 2017. Agriculture graduates were more balanced, moving from 54.3% in 2003 to 53.4% in 2017, while social sciences also declined slightly from 71.0% to 70.0% over the same period. By contrast, women were underrepresented in engineering, where their share dropped from 32.0% in 2003 to 24.5% in 2017. Arts and humanities also declined, from 59.1% in 2003 to 57.0% in 2017. However, female graduates in services rose sharply, from just 14.6% in 2003 to 48.8% in 2017. Data also shows that unspecified fields saw growth, rising from 15.3% in 2003 to 30.3% in 2014. For natural sciences and mathematics, the only available data point is from 2017, when women made up 62% of graduates._ |
| **Share of Female Graduates in ICT Programs** | In 2017, women accounted for 48.1% of graduates in ICT programs. Without additional years of data, no change over time can be assessed. |

<br>

## Women in ICT Workforce
```js
const indicators_women_in_ict_workforce = FileAttachment("../data/indicators_numerical_women_in_ict_workforce.csv").csv({typed: true});
```

```js
const indicators_women_in_ict_workforce_filtered = indicators_women_in_ict_workforce.filter(row => row.country === 'Philippines')
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
const indicators_women_graduates_in_stem_filtered = indicators_women_graduates_in_stem.filter(row => row.country === 'Philippines')
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
const indicators_gender_phone_ownership_filtered = indicators_gender_phone_ownership.filter(row => row.country === 'Philippines')
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
const indicators_ict_skills_filtered = indicators_ict_skills.filter(row => row.country === 'Philippines')
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
const graduates_by_field_filtered = graduates_by_field.filter(row => row.country === 'Philippines')
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
const graduates_in_ict_filtered = graduates_in_ict.filter(row => row.country === 'Philippines')
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