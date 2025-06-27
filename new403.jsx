import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Alert
} from '@mui/material';
import {
  Lock as LockIcon,
  Home as HomeIcon
} from '@mui/icons-material';

const Error403Page = () => {
  const handleGoHome = () => {
    // 実際のアプリケーションでは react-router-dom の useNavigate を使用
    window.location.href = '/';
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            padding: 6,
            textAlign: 'center',
            borderRadius: 3
          }}
        >
          <Box sx={{ mb: 3 }}>
            <LockIcon
              sx={{
                fontSize: 80,
                color: 'error.main',
                mb: 2
              }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 'bold',
              color: 'error.main',
              mb: 2
            }}
          >
            403
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 'medium',
              mb: 2,
              color: 'text.primary'
            }}
          >
            アクセスが拒否されました
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            申し訳ございません。このページにアクセスする権限がありません。
            <br />
            必要な権限をお持ちでない可能性があります。
          </Typography>

          <Alert
            severity="warning"
            sx={{
              mb: 4,
              textAlign: 'left',
              maxWidth: '500px',
              margin: '0 auto 32px auto'
            }}
          >
            このページにアクセスするには適切な権限が必要です。管理者にお問い合わせください。
          </Alert>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{
                minWidth: 180,
                height: 48,
                fontSize: '1rem',
                borderRadius: 2
              }}
            >
              マイページに戻る
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => window.history.back()}
              sx={{
                minWidth: 120,
                height: 48,
                fontSize: '1rem',
                borderRadius: 2
              }}
            >
              前のページ
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Error403Page;