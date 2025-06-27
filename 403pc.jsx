import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Lock as LockIcon,
  Home as HomeIcon,
  ArrowBack as ArrowBackIcon,
  Circle as CircleIcon
} from '@mui/icons-material';

export default function Error403PagePC() {
  const handleGoHome = () => {
    // React Routerを使用している場合は、useNavigate('/') を使用してください
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            borderRadius: 4,
            p: { xs: 4, sm: 6, md: 8 },
            textAlign: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          {/* エラーアイコン */}
          <Box mb={4}>
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                backgroundColor: 'error.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3
              }}
            >
              <LockIcon sx={{ fontSize: 60, color: 'error.main' }} />
            </Box>
          </Box>

          {/* エラーコード */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '6rem', sm: '8rem', md: '10rem' },
              fontWeight: 'bold',
              color: 'error.main',
              mb: 3,
              letterSpacing: '-0.05em'
            }}
          >
            403
          </Typography>

          {/* エラータイトル */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 600,
              color: 'text.primary',
              mb: 3
            }}
          >
            アクセスが拒否されました
          </Typography>

          {/* エラー説明 */}
          <Box mb={4}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.6 }}
            >
              申し訳ございませんが、このページにアクセスする権限がありません。
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, fontSize: '1rem' }}
            >
              以下の理由が考えられます：
            </Typography>

            <List sx={{ maxWidth: 400, mx: 'auto', textAlign: 'left' }}>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                </ListItemIcon>
                <ListItemText
                  primary="必要な権限をお持ちでない"
                  primaryTypographyProps={{ fontSize: '0.95rem' }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                </ListItemIcon>
                <ListItemText
                  primary="ログインが必要"
                  primaryTypographyProps={{ fontSize: '0.95rem' }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
                </ListItemIcon>
                <ListItemText
                  primary="セッションが期限切れ"
                  primaryTypographyProps={{ fontSize: '0.95rem' }}
                />
              </ListItem>
            </List>
          </Box>

          {/* アクションボタン */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            mb={4}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                borderRadius: 3,
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              マイページに戻る
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={handleGoBack}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                borderRadius: 3,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              前のページに戻る
            </Button>
          </Stack>

          {/* 追加情報 */}
          <Box>
            <Divider sx={{ mb: 3 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.9rem' }}
            >
              問題が解決しない場合は、システム管理者にお問い合わせください。
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}