---
theme: air
style: ../assets/css/diwa.css
---

# Categorical indicators

<div class="card card-note">
<strong>NOTE</strong><br>
The data presented here are based on available data but due to the lack of standardized and comparable data across ASEAN member states, some gaps and limitations may exist.
<br>
Users are advised to use caution when interpreting the data and to consider these limitations when making conclusions or decisions.
</div>
<br>


<h2 id="indicators_categorical_gender_equality_policies">Existence of Comprehensive Gender Equality Policies</h2>

<div class="card">
Broad policies addressing gender equality across sectors, including ICT, providing a foundation for reducing digital gender divide.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_gender_equality_policies).
</div>

```js
const summ_indicators_categorical_gender_equality_policies = FileAttachment("../data/summ_indicators_categorical_gender_equality_policies.csv").csv({typed: true});
```

<!-- "#87CEEB",  -->

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Comprehensive Gender Equality Policies",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_gender_equality_policies, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Does a Comprehensive Gender Equality Policy Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_gender_equality_policies = FileAttachment("../data/indicators_categorical_gender_equality_policies.csv").csv({typed: true});
```

```js
const indicators_categorical_gender_equality_policies_filtered = indicators_categorical_gender_equality_policies.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_gender_equality_policies = view(Inputs.search(indicators_categorical_gender_equality_policies_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_gender_equality_policies, {
    layout: "auto",
    height: 320
})
```

<br><br> 
<h2 id="indicators_categorical_gender_ict_policies">Integration of Gender Considerations in ICT-Specific Policies/Policy Integration of Gender and ICT</h2>

<div class="card">
The degree to which ICT and digital transformation policies explicitly address gender disparities in access, skills, or workforce participation. The extent to which gender equality is woven into broader ICT policies and strategies for inclusive digital transformation
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_gender_ict_policies).
</div>

```js
const summ_indicators_categorical_gender_ict_policies = FileAttachment("../data/summ_indicators_categorical_gender_ict_policies.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Integration of Gender Considerations in ICT-Specific Policies",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_gender_ict_policies, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Are Gender Considerations Integrated in ICT-Specific Policies?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_gender_ict_policies = FileAttachment("../data/indicators_categorical_gender_ict_policies.csv").csv({typed: true});
```

```js
const indicators_categorical_gender_ict_policies_filtered = indicators_categorical_gender_ict_policies.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_gender_ict_policies = view(Inputs.search(indicators_categorical_gender_ict_policies_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_gender_ict_policies, {
    layout: "auto",
    height: 180
})
```

<br><br> 
<h2 id="indicators_categorical_gender_budgeting">Gender Budgeting and Mainstreaming Frameworks</h2>

<div class="card">
Frameworks ensuring gender considerations are part of budgetary allocations and policy implementation in ICT initiatives.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_gender_budgeting).
</div>

```js
const summ_indicators_categorical_gender_budgeting = FileAttachment("../data/summ_indicators_categorical_gender_budgeting.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Gender Budgeting and Mainstreaming Frameworks",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_gender_budgeting, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Gender Budgeting and Mainstreaming Frameworks Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_gender_budgeting = FileAttachment("../data/indicators_categorical_gender_budgeting.csv").csv({typed: true});
```

```js
const indicators_categorical_gender_budgeting_filtered = indicators_categorical_gender_budgeting.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_gender_budgeting = view(Inputs.search(indicators_categorical_gender_budgeting_filtered, {placeholder: "Search data..."}));
```

```js
Inputs.table(search_gender_budgeting, {
    layout: "auto",
    height: 240
})
```

<br><br> 
<h2 id="indicators_categorical_government_bodies">Specialized Government Bodies for Gender and ICT</h2>

<div class="card">
Government agencies or bodies dedicated to integrating gender equality into ICT policy or addressing gender-specific ICT issues.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_government_bodies).
</div>

```js
const summ_indicators_categorical_government_bodies = FileAttachment("../data/summ_indicators_categorical_government_bodies.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Specialized Government Bodies for Gender and ICT",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_government_bodies, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Specialized Government Bodies for Gender and ICT Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_government_bodies = FileAttachment("../data/indicators_categorical_government_bodies.csv").csv({typed: true});
```

```js
const indicators_categorical_government_bodies_filtered = indicators_categorical_government_bodies.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_government_bodies = view(Inputs.search(indicators_categorical_government_bodies_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_government_bodies, {
    layout: "auto",
    height: 240
})
```

<br><br> 
<h2 id="indicators_categorical_development_initiatives">Education and Skill Development Initiatives for Women in ICT</h2>

<div class="card">
Government Programs aimed at increasing women’s ICT participation through education, scholarships, mentorship, and skills training.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_development_initiatives).
</div>

```js
const summ_indicators_categorical_development_initiatives = FileAttachment("../data/summ_indicators_categorical_development_initiatives.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Education and Skill Development Initiatives for Women in ICT",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_development_initiatives, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Education and Skill Development Initiatives for Women in ICT Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_development_initiatives = FileAttachment("../data/indicators_categorical_development_initiatives.csv").csv({typed: true});
```

```js
const indicators_categorical_development_initiatives_filtered = indicators_categorical_development_initiatives.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_development_initiatives = view(Inputs.search(indicators_categorical_development_initiatives_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_development_initiatives, {
    layout: "auto",
    height: 320
})
```

<br><br> 
<h2 id="indicators_categorical_data_collection">Data Collection and Analysis Initiatives on Gender and ICT</h2>

<div class="card">
Efforts to collect and analyze gender-disaggregated data on ICT access, usage, skills, and workforce participation.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_data_collection).
</div>

```js
const summ_indicators_categorical_data_collection = FileAttachment("../data/summ_indicators_categorical_data_collection.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Data Collection and Analysis Initiatives on Gender and ICT",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_data_collection, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Data Collection and Analysis Initiatives on Gender and ICT Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_data_collection = FileAttachment("../data/indicators_categorical_data_collection.csv").csv({typed: true});
```

```js
const indicators_categorical_data_collection_filtered = indicators_categorical_data_collection.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_data_collection = view(Inputs.search(indicators_categorical_data_collection_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_data_collection, {
    layout: "auto",
    height: 180
})
```

<br><br> 
<h2 id="indicators_categorical_workplace_policies">Workplace Policies Promoting Gender Equality in ICT</h2>

<div class="card">
Organizational or national policies supporting gender equality in ICT workplaces, such as flexible work or anti-discrimination measures.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_workplace_policies).
</div>

```js
const summ_indicators_categorical_workplace_policies = FileAttachment("../data/summ_indicators_categorical_workplace_policies.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Workplace Policies Promoting Gender Equality in ICT",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_workplace_policies, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Workplace Policies Promoting Gender Equality in ICT Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_workplace_policies = FileAttachment("../data/indicators_categorical_workplace_policies.csv").csv({typed: true});
```

```js
const indicators_categorical_workplace_policies_filtered = indicators_categorical_workplace_policies.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_workplace_policies = view(Inputs.search(indicators_categorical_workplace_policies_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_workplace_policies, {
    layout: "auto",
    height: 180
})
```

<br><br> 
<h2 id="indicators_categorical_entrepreneurship_programs">Entrepreneurship Support Programs for Women in ICT</h2>

<div class="card">
Initiatives providing funding, mentorship, or resources to women ICT entrepreneurs.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_entrepreneurship_programs).
</div>

```js
const summ_indicators_categorical_entrepreneurship_programs = FileAttachment("../data/summ_indicators_categorical_entrepreneurship_programs.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Entrepreneurship Support Programs for Women in ICT",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_entrepreneurship_programs, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Entrepreneurship Support Programs for Women in ICT Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_entrepreneurship_programs = FileAttachment("../data/indicators_categorical_entrepreneurship_programs.csv").csv({typed: true});
```

```js
const indicators_categorical_entrepreneurship_programs_filtered = indicators_categorical_entrepreneurship_programs.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_entrepreneurship_programs = view(Inputs.search(indicators_categorical_entrepreneurship_programs_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_entrepreneurship_programs, {
    layout: "auto",
    height: 320
})
```

<br><br> 
<h2 id="indicators_categorical_technology_access">Technology Access and Digital Inclusion Programs</h2>

<div class="card">
Programs increasing women’s access to technology, especially in underserved areas.
</div>

<div class="card">

View data on [**Datasette**](https://data.aseandiwa.org/asean_diwa/indicators_categorical_technology_access).
</div>

```js
const summ_indicators_categorical_technology_access = FileAttachment("../data/summ_indicators_categorical_technology_access.csv").csv({typed: true});
```

```js
Plot.plot({
    color: {range: ["#3f3f3f", "#C8057C"], legend: true},
    x: {label: null},
    y: {label: "Country"},
    marginLeft: 150,
    marginBottom: 50,
    title: "Technology Access and Digital Inclusion Programs",
    subtitle: "Using most recent data available",
    marks: [
        Plot.cell(
            summ_indicators_categorical_technology_access, {
                y: "country", fill: "exists", x: "exists", tip: true, sort: {x: "-x"}
            }
            
        ),
        Plot.axisX({
            label: "Do Technology Access and Digital Inclusion Programs Exist?", 
            }
        ),
    ]
})
```

```js
const indicators_categorical_technology_access = FileAttachment("../data/indicators_categorical_technology_access.csv").csv({typed: true});
```

```js
const indicators_categorical_technology_access_filtered = indicators_categorical_technology_access.map((row) => {
    return {
        Country: row.country,
        "Policy/Program Exists": row.exists,
        "Name of Policy/Program": row["policy/program"],
        "Start Year": new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year).replace(/^0+/, '') === '' ? null : new Intl.NumberFormat('en-US', {useGrouping: false}).format(row.year),
        "Other information": row.remarks
    }
});
```

```js
const search_technology_access = view(Inputs.search(indicators_categorical_technology_access_filtered, {placeholder: "Search data..."}));

```

```js
Inputs.table(search_technology_access, {
    layout: "auto",
    height: 320
})
```
