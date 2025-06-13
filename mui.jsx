import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Chip,
  Button,
  Alert,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Avatar,
  Divider,
  Paper,
  Container
} from '@mui/material';
import {
  ArrowForward,
  Group,
  Close,
  PersonAdd
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// テーマの設定
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const GroupEditor = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'グループA',
      color: 'primary',
      members: ['田中太郎', '佐藤花子', '鈴木一郎']
    },
    {
      id: 2,
      name: 'グループB',
      color: 'success',
      members: ['山田次郎', '高橋美咲']
    },
    {
      id: 3,
      name: 'グループC',
      color: 'secondary',
      members: ['伊藤健太', '中村由美', '小林修']
    },
    {
      id: 4,
      name: 'グループD',
      color: 'warning',
      members: ['加藤真一']
    }
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [sourceGroupId, setSourceGroupId] = useState(null);

  const handleMemberClick = (member, groupId) => {
    if (selectedMember === member && sourceGroupId === groupId) {
      setSelectedMember(null);
      setSourceGroupId(null);
    } else {
      setSelectedMember(member);
      setSourceGroupId(groupId);
    }
  };

  const handleMoveToGroup = (targetGroupId) => {
    if (!selectedMember || !sourceGroupId || sourceGroupId === targetGroupId) return;

    setGroups(prevGroups => {
      return prevGroups.map(group => {
        if (group.id === sourceGroupId) {
          return {
            ...group,
            members: group.members.filter(member => member !== selectedMember)
          };
        } else if (group.id === targetGroupId) {
          return {
            ...group,
            members: [...group.members, selectedMember]
          };
        }
        return group;
      });
    });

    setSelectedMember(null);
    setSourceGroupId(null);
  };

  const clearSelection = () => {
    setSelectedMember(null);
    setSourceGroupId(null);
  };

  const getInitials = (name) => {
    return name.charAt(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="xl">
          {/* ヘッダー */}
          <Box mb={4}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              グループエディター
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              メンバーをクリックして選択し、移動ボタンで他のグループに移動できます
            </Typography>
          </Box>

          {/* 選択中のメンバー表示 */}
          {selectedMember && (
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={clearSelection}
                >
                  <Close fontSize="inherit" />
                </IconButton>
              }
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  選択中:
                </Typography>
                <Chip 
                  label={selectedMember} 
                  color="primary" 
                  variant="filled"
                  size="small"
                />
              </Box>
            </Alert>
          )}

          {/* グループカード */}
          <Grid container spacing={3}>
            {groups.map(group => (
              <Grid item xs={12} sm={6} lg={3} key={group.id}>
                <Card 
                  elevation={2}
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      elevation: 4,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: `${group.color}.main` }}>
                        <Group />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {group.name}
                      </Typography>
                    }
                    action={
                      <Chip 
                        label={`${group.members.length}人`} 
                        size="small" 
                        variant="outlined"
                        color={group.color}
                      />
                    }
                    sx={{ pb: 1 }}
                  />
                  
                  <CardContent sx={{ pt: 0 }}>
                    {/* メンバーリスト */}
                    <List sx={{ py: 0 }}>
                      {group.members.map((member, index) => (
                        <React.Fragment key={index}>
                          <ListItem disablePadding>
                            <ListItemButton
                              onClick={() => handleMemberClick(member, group.id)}
                              selected={selectedMember === member && sourceGroupId === group.id}
                              sx={{
                                borderRadius: 2,
                                mb: 1,
                                border: selectedMember === member && sourceGroupId === group.id 
                                  ? '2px solid' 
                                  : '1px solid transparent',
                                borderColor: selectedMember === member && sourceGroupId === group.id 
                                  ? 'primary.main' 
                                  : 'transparent',
                                '&:hover': {
                                  backgroundColor: 'action.hover',
                                }
                              }}
                            >
                              <Avatar 
                                sx={{ 
                                  width: 32, 
                                  height: 32, 
                                  mr: 2, 
                                  bgcolor: `${group.color}.light`,
                                  fontSize: '0.8rem'
                                }}
                              >
                                {getInitials(member)}
                              </Avatar>
                              <ListItemText 
                                primary={member}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  fontWeight: 'medium'
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        </React.Fragment>
                      ))}
                    </List>

                    {group.members.length === 0 && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          py: 4,
                          border: '2px dashed',
                          borderColor: 'grey.300',
                          borderRadius: 2,
                          color: 'text.secondary'
                        }}
                      >
                        <Typography variant="body2">
                          メンバーなし
                        </Typography>
                      </Box>
                    )}

                    {/* 移動ボタン */}
                    {selectedMember && sourceGroupId !== group.id && (
                      <Box sx={{ mt: 2 }}>
                        <Divider sx={{ mb: 2 }} />
                        <Button
                          onClick={() => handleMoveToGroup(group.id)}
                          variant="outlined"
                          color={group.color}
                          fullWidth
                          startIcon={<ArrowForward />}
                          sx={{
                            py: 1.5,
                            fontWeight: 'medium',
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: `${group.color}.light`,
                              borderColor: `${group.color}.main`,
                            }
                          }}
                        >
                          ここに移動
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* 操作説明 */}
          <Paper elevation={1} sx={{ mt: 4, p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              操作方法
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText 
                  primary="メンバーをクリックして選択状態にします"
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="移動先のグループの「ここに移動」ボタンをクリックします"
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="選択を解除したい場合は、同じメンバーを再度クリックするか、×ボタンをクリックします"
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            </List>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default GroupEditor;
