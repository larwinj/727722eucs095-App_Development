from graphviz import Digraph

dot = Digraph()

# Define entities and their attributes
entities = {
    'User': ['UserID', 'Username', 'Email', 'Password', 'PhoneNumber', 'ProfilePicture', 'AccountBalance'],
    'MobileRecharge': ['RechargeID', 'UserID', 'MobileNumber', 'OperatorID', 'CircleID', 'Amount', 'Date', 'Status'],
    'Operator': ['OperatorID', 'OperatorName'],
    'Circle': ['CircleID', 'CircleName'],
    'RechargeOffer': ['OfferID', 'OperatorID', 'CircleID', 'Amount', 'Description', 'Validity'],
    'TransactionHistory': ['TransactionID', 'UserID', 'RechargeID', 'TransactionDate', 'Amount', 'Status'],
    'SupportTicket': ['TicketID', 'UserID', 'IssueDescription', 'DateCreated', 'Status']
}

# Add entities and their attributes to the graph
for entity, attrs in entities.items():
    dot.node(entity, shape='box')
    for attr in attrs:
        dot.node(attr, shape='ellipse')
        dot.edge(entity, attr)

# Define relationships
relationships = [
    ('User', 'MobileRecharge', 'Makes'),
    ('Operator', 'MobileRecharge', 'Has'),
    ('Circle', 'MobileRecharge', 'Belongs'),
    ('User', 'TransactionHistory', 'Has'),
    ('MobileRecharge', 'TransactionHistory', 'Logs'),
    ('User', 'SupportTicket', 'Creates'),
    ('RechargeOffer', 'MobileRecharge', 'Applies')
]

# Add relationships to the graph
for source, target, label in relationships:
    relation_id = f"{source}{target}{label}"
    dot.node(relation_id, label, shape='diamond')
    dot.edge(source, relation_id)
    dot.edge(relation_id, target)

# Save and render the graph
diagram_path = 'mobile_recharge1_er_diagram_simplified'
dot.render(diagram_path, format='png', cleanup=False)

print(f"ER1 Diagram saved as {diagram_path}.png")