#!/usr/bin/env python
# coding: utf-8

# In[1]:


import dash                     # pip install dash
from dash.dependencies import Input, Output, State
from dash import dcc
import plotly

import numpy as np

import plotly.graph_objs as go
import plotly.express as px

from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
#import cufflinks as cf

#import dash_html_components as html
from dash import html
import plotly.express as px     # pip install plotly==5.2.2

import pandas as pd


# In[2]:


df1 = pd.read_csv("D:/Personal/class/__Masters/6th semester/HIS Project/csv/Group2Data.csv")

df1.rename(columns={'energy_cons': 'Energy Consumption(GJ)','employees': 'Total Number of Employees','waste': 'Waste Produced(XXX)',
                    'waste_recycled': 'Waste Recycled',
                   'water_cons': 'Water Consumption(cubic meter)','waste_water':'Water Wastage(M^3)','renewable_energy_pct':
                   'Renewable Energy','fuel_fleet':'Fuel Fleet(PJ)','contrib_political':'Political Contribution(in €)',
                   'waste_recycled_pct':'Waste Recycled Percentage',' legal_spending':
                   'Legal Spending(in €)','fines_spending':'Fine Spending(in €)','employee_turnover':'Employee Turnover(%)',
                   'female_pct' :'Total share of Female Employees','female_mgmt_pct':'Share of Female Employees in Management',
                   'employee_parental_pct':'Employee Parental Percentage','employee_tenure':'Employee Tenure',
                   'employee_under30_pct':'Share of Employees Under 30 Years Old',
                   'employee_over50_pct':'Share of Employees Over 50 Years Old',
                   'training_spending':'Training spending(in €)'}, inplace=True)

# df1.rename(columns={'employees': 'Total Number of Employees', 'employee_parental_pct':'Employee Parental Percentage',
#                     'employee_tenure':'Employee Tenure',
#                    'employee_under30_pct':'Share of Employees Under 30 Years Old ',
#                    'employee_over50_pct':'Share of Employees Over 50 Years Old'}, inplace=True)

df1


# In[3]:


external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
app = dash.Dash(__name__, external_stylesheets=external_stylesheets)


# indicators = ['employees','fines_spending','employee_turnover', 'female_pct', 'female_mgmt_pct','employee_tenure','employee_parental_pct',
#              'employee_under30_pct','employee_over50_pct']




app.layout = html.Div([
    html.H1("German sustainablity model", style={"textAlign":"center"}),
    html.Hr(),
    
    html.P("Choose Year:"),
    html.Div(html.Div([
        dcc.Dropdown(id='year-value', clearable=True,
                     value="2017",
                     options=[{'label': x, 'value': x} for x in
                              df1["year"].unique()]),
    ],className="two columns"),className="row"),
    
    html.P("Select Firms"),
    html.Div(html.Div([
        dcc.Dropdown(id='firm_name', clearable=False,
                     value="",
                     options=[{'label': x, 'value': x} for x in
                              df1["name"].unique()],multi=True,style={'width': '100%'}),
    ],className="three columns"),className="row"),
    
    html.Div(id="output-div", children=[]),
    

    
    
])


# In[ ]:


@app.callback(Output(component_id="output-div", component_property="children"),
              
              Input(component_id="year-value", component_property="value"),
              Input(component_id="firm_name", component_property="value"),
              #Input(component_id="indi_list", component_property="value")
              
               
)



def make_graphs(selected_year, selected_firms):
    
    
    
    #graph1
    df_year = df1[df1["year"]==selected_year]
    df_year =  df_year[df_year["name"].isin(selected_firms)]
    
     # Bar chart
    
    bar_chart = px.bar(df_year, x ='Total Number of Employees' , y =selected_firms,
                      title = "Employees by Firms", orientation = "h")
    
#     bar_chart = px.bar(df_year, x = "employees", y = 'name',
#                       title = "Donation by Firms", orientation = "h")

#pie chart 1
    
    pie_chart1 = px.pie(
        data_frame=df_year,
        values='Total share of Female Employees',
        names=selected_firms,
        color=selected_firms,                      #differentiate markers (discrete) by color
        #color_discrete_sequence=["red","green","blue","orange"],     #set marker colors
        # color_discrete_map={"WA":"yellow","CA":"red","NY":"black","FL":"brown"},
        #hover_name='waste_recycled',              #values appear in bold in the hover tooltip
        #hover_data=['waste_recycled_pct',],            #values appear as extra data in the hover tooltip
        # custom_data=['total'],              #values are extra data to be used in Dash callbacks
        labels={"name":"Firm Name"},       #map the labels
        #title='Female percentage in companys',     #figure title
        template='presentation',            #'ggplot2', 'seaborn', 'simple_white', 'plotly',
                                            #'plotly_white', 'plotly_dark', 'presentation',
                                            #'xgridoff', 'ygridoff', 'gridon', 'none'
        width=1024,                          #figure width in pixels
        height=600,                         #figure height in pixels
        hole=0.5,                           #represents the hole in middle of pie
        )
    
     #pie chart 2
    
    pie_chart2 = px.pie(
        data_frame=df_year,
        values='Share of Female Employees in Management',
        names=selected_firms,
        color=selected_firms,                      #differentiate markers (discrete) by color
        #color_discrete_sequence=["red","green","blue","orange"],     #set marker colors
        # color_discrete_map={"WA":"yellow","CA":"red","NY":"black","FL":"brown"},
        #hover_name='waste_recycled',              #values appear in bold in the hover tooltip
        #hover_data=['waste_recycled_pct',],            #values appear as extra data in the hover tooltip
        # custom_data=['total'],              #values are extra data to be used in Dash callbacks
        labels={"name":"Firm Name"},       #map the labels
       # title='Female percentage in companys',     #figure title
        template='presentation',            #'ggplot2', 'seaborn', 'simple_white', 'plotly',
                                            #'plotly_white', 'plotly_dark', 'presentation',
                                            #'xgridoff', 'ygridoff', 'gridon', 'none'
        width=1024,                          #figure width in pixels
        height=600,                         #figure height in pixels
        hole=0.5,                           #represents the hole in middle of pie
        )
    
     #pie chart 3
    
    pie_chart3 = px.pie(
        data_frame=df_year,
        values='Share of Employees Under 30 Years Old',
        names=selected_firms,
        color=selected_firms,                      #differentiate markers (discrete) by color
        #color_discrete_sequence=["red","green","blue","orange"],     #set marker colors
        # color_discrete_map={"WA":"yellow","CA":"red","NY":"black","FL":"brown"},
        #hover_name='waste_recycled',              #values appear in bold in the hover tooltip
        #hover_data=['waste_recycled_pct',],            #values appear as extra data in the hover tooltip
        # custom_data=['total'],              #values are extra data to be used in Dash callbacks
        labels={"name":"Firm Name"},       #map the labels
        #title='Female percentage in companys',     #figure title
        template='presentation',            #'ggplot2', 'seaborn', 'simple_white', 'plotly',
                                            #'plotly_white', 'plotly_dark', 'presentation',
                                            #'xgridoff', 'ygridoff', 'gridon', 'none'
        width=1024,                          #figure width in pixels
        height=600,                         #figure height in pixels
        hole=0.5,                           #represents the hole in middle of pie
        )
    
     #pie chart 4
    
    pie_chart4 = px.pie(
        data_frame=df_year,
        values='Share of Employees Over 50 Years Old',
        names=selected_firms,
        color=selected_firms,                      #differentiate markers (discrete) by color
        #color_discrete_sequence=["red","green","blue","orange"],     #set marker colors
        # color_discrete_map={"WA":"yellow","CA":"red","NY":"black","FL":"brown"},
        #hover_name='waste_recycled',              #values appear in bold in the hover tooltip
        #hover_data=['waste_recycled_pct',],            #values appear as extra data in the hover tooltip
        # custom_data=['total'],              #values are extra data to be used in Dash callbacks
        labels={"name":"Firm Name"},       #map the labels
        #title='Female percentage in companys',     #figure title
        template='presentation',            #'ggplot2', 'seaborn', 'simple_white', 'plotly',
                                            #'plotly_white', 'plotly_dark', 'presentation',
                                            #'xgridoff', 'ygridoff', 'gridon', 'none'
        width=1024,                          #figure width in pixels
        height=600,                         #figure height in pixels
        hole=0.5,                           #represents the hole in middle of pie
        )
    

    
    
    
    return [
        
         
       html.Div([
            html.Div([dcc.Graph(figure=bar_chart)], className="ten columns"),
        ], className="row"),

        html.H2("Female Percentage in Company", style={"font-family": "auto"}),
        html.Hr(),
        html.Div([
            html.Div([dcc.Graph(figure=pie_chart1)], className="twelve columns"),
        ], className="row"),
        
        html.H2("Female Management Percentage in Company", style={"font-family": "auto"}),
        html.Hr(),
        html.Div([
            html.Div([dcc.Graph(figure=pie_chart2)], className="twelve columns"),
        ], className="row"),
        
        html.H2("Employee Under 30 Years Age", style={"font-family": "auto"}),
        html.Hr(),
        html.Div([
            html.Div([dcc.Graph(figure=pie_chart3)], className="twelve columns"),
        ], className="row"),
        
        html.H2("Employee Over 50 Years Age", style={"font-family": "auto"}),
        html.Hr(),
        html.Div([
            html.Div([dcc.Graph(figure=pie_chart4)], className="twelve columns"),
        ], className="row"),
        

       
        
    ]
    
    
    
    


if __name__ == '__main__':
    app.run_server(host='0.0.0.0',debug=False)


# In[ ]:




