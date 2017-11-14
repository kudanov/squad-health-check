//DevExpress.viz.currentTheme('generic.light');
$(function(){
    $('#gridContainer').dxDataGrid({
        paging: {
            enabled: false
        },
        editing: {
            mode: 'form',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true,
            form: {colCount: 4}
        },
        showColumnLines: false,
        showRowLines: true,
        // showColumnHeaders: false,
        rowAlternationEnabled: true,
        dataSource: answers,
        columns: [
            {
                dataField: 'squad',
                caption: 'Squad name',
                formItem: {colSpan: 4}
            }, 
            {
                dataField: 'area',
                formItem: {colSpan: 4},
                lookup: {
                    dataSource: pageData.areaDescription,
                    valueExpr: 'id',
                    displayExpr: 'description'
                }
            },
            {dataField:'good', visible: false},
            {dataField:'meh', visible: false},
            {dataField:'bad', visible: false},
            {
                dataField:'trend', 
                visible: false,
                lookup: {
                    dataSource: pageData.trendValues,
                    valueExpr: 'id',
                    displayExpr: 'description'
                }
            },
            {
                caption: 'State',
                formItem: {visible: false},
                calculateDisplayValue: function(data){
                    return [
                        'Good:', data.good, 
                        'Meh:', data.meh, 
                        'Bad:', data.bad,
                        'Trend:', data.trend
                    ].join(' ');
                }
            },
            {
                dataField: 'issues',
                formItem: {
                    colSpan: 4,
                    editorType: 'dxTextArea',
                    editorOptions: {
                        placeholder: 'Enter the issues that squad see',
                        autoResizeEnabled:true,
                    },
                }
            }
        ],
        // Workaround for textArea in grid
        onEditorPreparing: function(e){
            if (e.dataField == 'issues'){
                e.editorName = 'dxTextArea';
            }
        }
    });
});

var answers = [{
    squad: 'Squad1',
    area: 'Area 1',
    good: 3,
    meh: 2,
    bad: 1,
    trend: 0,
    issues: 'More issues!'
}, {
    squad: 'Squad1',
    area: 'Area 3',
    good: 3,
    meh: 2,
    bad: 1,
    trend: 0,
    issues: 'More issues! More issues! More issues!'
}, {
    squad: 'Squad1',
    area: 'Area 4',
    good: 3,
    meh: 2,
    bad: 1,
    trend: 0,
    issues: ' More issues! More issues! More issues! More issues! More issues! More issues!'
}, {
    squad: 'Squad1',
    area: 'Area 5',
    good: 3,
    meh: 2,
    bad: 1,
    trend: 0,
    issues: ' More issues! More issues!'
}, ];
